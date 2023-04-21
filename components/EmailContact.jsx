// Create a React functional component to email my email address
const EmailForm = () => {
    return (
        <form action="mailto: jackiegleason@gmail.com" method="post" encType="text/plain">
            <input type="submit" value="Email Me" />
        </form>
    );
}
export { EmailForm };