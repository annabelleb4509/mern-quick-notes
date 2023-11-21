import { checkToken } from '../../../utilities/users-service';


function OrderHistoryPage() {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
        }

    return (
        <>
        <h1>OrderHistoryPage</h1>
        <button onClick={ handleCheckToken }>Check when my Login Expires</button>
        </>
    );
}

export default OrderHistoryPage;