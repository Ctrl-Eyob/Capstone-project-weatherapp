import { Alert } from "./icons";

export default function ErrorMessage({ message, onRetry }) {
  if (!message) return null;
  return (
    <div className="mt-4 rounded-xl2 border border-red-200 bg-red-50 p-4 text-red-700">
      <div className="flex items-start gap-3">
        <Alert className="mt-0.5 h-5 w-5" />
        <div className="flex-1">
          <p className="text-sm">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-2 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-red-700 shadow hover:bg-red-100"
            >
              Try again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
