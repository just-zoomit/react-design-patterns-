export const partiallyApply = (Components, partialProps) => {
    return props => {
        return <Components {...partialProps} {...props} />;
    }
}