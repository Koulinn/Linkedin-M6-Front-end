

const TransitionPage = (props) => {
    return (
        <>
            <div className="transitionPageBody" style={{ color: 'transparent' }}>
                {setTimeout(() => {
                    props.setShowTopNavBar(true)
                    props.history.push('profile')
                }, 3000)}
                <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="" />
                <div className="infinity-3"></div>
            </div>

        </>
    )
}

export default TransitionPage