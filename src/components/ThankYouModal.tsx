"use client";

type ThankYouModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-6">We will get back to you soon.</p>
        <button
          onClick={onClose}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
