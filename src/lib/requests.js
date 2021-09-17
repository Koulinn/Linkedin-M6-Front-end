const getUserData = async (UsernameAndPassword) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_DEV_URL}profile/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(UsernameAndPassword),
            }
        )
        if (response.ok) {
            let userData = await response.json()
            return {
                userData: userData,
                success: true
            }
        } else {
            return { 
                success : false
            }
        }
    } catch (err) {
        console.log(err, 'From getUserData request')
        return {
            serverError: true,
            success: false
        }
    }
}


const requests = {
    getUserData: getUserData

}

export default requests