import { ErrorType } from "../Auth/AuthForm";

const ErrorMessage: React.FC<{ data: ErrorType }> = ({ data }) => {
  return (
    <div>
      {data && data.message && (
        <p style={{ textAlign: "center" }}>{data.message}</p>
      )}
      {data && (
        <ul style={{ textAlign: "center" }}>
          {Object.values(data.errors).map((error) => (
            <li>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ErrorMessage;
