//Status.tsx
export type StatusProp = {
    status: 'loading' | 'error' | 'success';
}

const Status: React.FC = () => {

    const statusInput: StatusProp = { 
        status: 'loading'
    }

    let message
    if(statusInput.status === 'loading'){
        message = 'Loading...';
    }else if(statusInput.status === 'error'){
        message = 'Error fetching data';
    }else if(statusInput.status === 'success'){
        message = 'Data fetched successfully';
    }

    return (
        <div>
        <h1>Status</h1>
        <p>{message}</p>
        </div>
    );
}

export default Status;