export const printProps = Component => {
    console.log(Component );
    return props => {
        console.log("Props:", props);
        return <Component {...props} />;
    }
};