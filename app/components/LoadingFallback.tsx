import React from "react";

export function LoadingFallback({ title = "Loading..." }: { title?: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <p className="text-gray-600 text-center mt-4">Please wait while we load the content...</p>
      </div>
    </div>
  );
}
