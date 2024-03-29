import Col4 from "./Col4";
import {useEffect, useState} from "react";
import Customer from "./Customer";

type CustomerType = {
    image: string,
    title: string,
    href: string,
}
const Customers = () => {
    const [customers, setCustomers] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!loading) {
            setLoading(true)
            fetch("/data/customers.json", {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setCustomers(data)
                })
        }
    }, [customers, loading]);
    return (
        <Col4>
            {/*@ts-ignore*/}
            {customers && Object.keys(customers).length > 0 && customers.map((customer: CustomerType) => (
                <div key={customer.title}>
                    <Customer image={customer.image} title={customer.title} href={customer.href}/>
                </div>
            ))}
        </Col4>
    )
}
export default Customers;