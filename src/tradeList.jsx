import Data from "./data.jsx"
const totalPrice = Data.reduce((arrg,val)=>
    arrg + (val.count * val.price)
,0)
function TradeList() {
    return (
        <div className="main">
            <table>
                <thead>
                <tr>
                   <th>ID</th>
                   <th>Name</th>
                   <th>Date</th>
                   <th>Count</th>
                   <th>Price</th>
                   <th>TotalAmount</th>
                </tr>
                </thead>
                <tbody>
                    {Data.map((el,key)=>{
                        const sum = el.count * el.price
                        return (
                            <tr key = {key}>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.date}</td>
                                <td>{el.count}</td>
                                <td>{el.price}</td>
                                <td>{sum}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>  
                    <tr>
                        <td></td>
                        <td colSpan={4}>Total</td>
                        <td>{totalPrice}</td>
                    </tr>   
                </tfoot>
            </table>
        </div>
    )
}
export default TradeList