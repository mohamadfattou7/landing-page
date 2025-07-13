import RegisterForm from "./RegisterForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-white text-black">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Fill the form below and we&apos;ll get back to you as soon as possible.
        </p>
        <RegisterForm />
      </div>
    </section>
  );
}




