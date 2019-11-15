const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return (
            <WrappedComponent {...props} />
        );
    }
}

export default withErrorHandler;