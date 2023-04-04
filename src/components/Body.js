
function Body(){
    return (
        <>
        <div className="body">
            <div className="main">
                <form action="/" method="post">
                    <input type="text" placeholder="UserName"  />
                    <br />
                    <input type="text" placeholder="Password"  />
                    <br />
                    <input type="button" value="Submit" />
                </form>
            </div>

        </div>
        </>
    )
}


export default Body;