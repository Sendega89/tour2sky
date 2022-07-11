





const FavoriteItems= (props)=> {
    return props.myAccount.map(item => <FavoriteItem
    key={item.id}
    id={item.id}
    serviseId={item.service_id}
    user_id={item.user_id}
    name={item.name}
    link={item.link}
    create_at={item.created_at}
    />)
}

const FavoriteItem = (props) => {
    return (
        <div>
            <ul>
                <li>{props.id}</li>
                <li>{props.serviseId}</li>
                <li>{props.user_id}</li>
                <li>{props.name}</li>
                <li>{props.link}</li>
                <li>{props.create_at}</li>
            </ul>
        </div>
    )

}
export default FavoriteItems