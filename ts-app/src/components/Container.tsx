export const Container = ({children}: any) => {
    return (
        <div className="container p-4">
            <div className="col-md-4 offset-md-4">
                {children}
            </div>
        </div>
    );
}