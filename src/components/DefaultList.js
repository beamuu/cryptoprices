import Block from './Block'
import List from './List'
export default function DefaultList({ data }) {
    return (
        <>
            <Block height="100vh">
                <p className="desc">Note: USD prices calculated from USDT/THB at Bitkub market prices. Their might be some abitrage between other exchanges.</p>
                <List title="Bitcoin" quote="BTC" data={data} />
                <List title="Ethereum" quote="ETH" data={data} />
                <List title="Binance Coin" quote="BNB" data={data} />
                <List title="Tether" quote="USDT" data={data} />
                <List title="Cardano" quote="ADA" data={data} />
                <List title="Dogecoin" quote="DOGE" data={data} />
                <List title="XRP" quote="XRP" data={data} />
                <List title="Bitkub Coin" quote="KUB" data={data} />
                <List title="Litecoin" quote="LTC" data={data} />
                <List title="Bitcoin Cash" quote="BCH" data={data} />
                <List title="Stellar" quote="XLM" data={data} />
                <List title="Bitcoin SV" quote="BSV" data={data} />
                <List title="Wanchain" quote="WAN" data={data} />
                <List title="OMG Network" quote="OMG" data={data} />
                <List title="Zilliqa" quote="ZIL" data={data} />
                <List title="Status" quote="SNT" data={data} />
                <List title="Civic" quote="CVC" data={data} />
                <List title="Chainlink" quote="LINK" data={data} />
                <List title="IOST" quote="IOST" data={data} />
                <List title="0x" quote="ZRX" data={data} />
                <List title="Kyber Network Crystal Legacy" quote="KNC" data={data} />
                <List title="Raiden Network Token" quote="RDN" data={data} />
                <List title="Arcblock" quote="ABT" data={data} />
                <List title="Decentraland" quote="MANA" data={data} />
                <List title="Balancer" quote="BAL" data={data} />
                <List title="SIX" quote="SIX" data={data} />
                <List title="JFIN" quote="JFIN" data={data} />
                <List title="Everex" quote="EVX" data={data} />
                <List title="Power Ledger" quote="POW" data={data} />
                <List title="Dai" quote="DAI" data={data} />
                <List title="USD Coin" quote="USDC" data={data} />
                <List title="Basic Attention Token" quote="BAT" data={data} />
                <List title="Maker" quote="MKR" data={data} />
                <List title="Enjin Coin" quote="ENJ" data={data} />
                <List title="Band Protocol" quote="BAND" data={data} />
                <List title="Compound" quote="COMP" data={data} />
                <List title="Kusama" quote="KSM" data={data} />
                <List title="Polkadot" quote="DOT" data={data} />
                <List title="NEAR Protocol" quote="NEAR" data={data} />
                <List title="Secret" quote="SCRT" data={data} />
                <List title="Golem" quote="GLM" data={data} />
                <List title="yearn.finance" quote="YFI" data={data} />
                <List title="Uniswap" quote="UNI" data={data} />
                <List title="Aave" quote="AAVE" data={data} />
                <List title="Alpha Finance Lab" quote="ALPHA" data={data} />

                {/* <List title="Balancer" quote="BAL" data={data} /> */}
                <div className="my-5" />
            </Block>
        </>
    )
}