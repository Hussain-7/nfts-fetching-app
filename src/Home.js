import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
  useDisconnect,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Home = () => {
  const address = useAddress();
  const connect = useMetamask();

  const login = useLogin();
  const logout = useDisconnect();
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    if (address) {
      const options = {
        method: "GET",
        url: `https://deep-index.moralis.io/api/v2/${address}/nft`,
        params: {
          chain: "goerli",
          format: "decimal",
          normalizeMetadata: "false",
        },
        headers: {
          accept: "application/json",
          "X-API-Key":
            "FmpB7bIckgJMbg6gOqCnrBpPHj2hd6WdlwcZ6wFoqCuWswR2t4f1dqy65jarTL2I",
        },
      };
      (async () => {
        const result = await axios(options);
        console.log(result.data.result);
        setNfts(result.data.result);
        console.log(nfts);
      })();
    }
  }, [address]);

  return (
    <div>
      {address ? (
        <>
          <button onClick={() => login()}>Login with Wallet</button>
          <button onClick={logout}>Logout</button>
          <pre>User Wallet Address: {address || "null"}</pre>
					<h1 style={{
						textAlign: "center",
						marginBottom: "50px"
					}}>User Nfts</h1>
          <div className="grid">
            {nfts.map((nft, i) => (
              <Card
                key={i}
                name={JSON.parse(nft.metadata).name}
                image={JSON.parse(nft.metadata).image}
                url={`https://testnets.opensea.io/assets/goerli/${nft.token_address}/${nft.token_id}`}
              />
            ))}
          </div>
        </>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Home;
