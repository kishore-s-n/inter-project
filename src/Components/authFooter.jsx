import Button from "./Button"

const authFooter = (props) => {
    return (
        <>
            <Button to="/Home">
                {props.btntext}
            </Button>
            <>
                <hr /><p>or</p>
            </>
        </>
    )
}

export default authFooter