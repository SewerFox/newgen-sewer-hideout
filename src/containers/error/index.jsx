import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { BackgroundContainer } from '../../components/background/index'

export function ErrorScreen() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <BackgroundContainer>
                <h1>{error.status}</h1>
                <p>{error.statusText}</p>
                {error.data?.message && <p>{error.data.message}</p>}
            </BackgroundContainer>
        );
    }

    return (
        <BackgroundContainer>
            <h1>Error</h1>
            <p>{error?.message || 'Unknown error lol'}</p>
        </BackgroundContainer>
    );
}