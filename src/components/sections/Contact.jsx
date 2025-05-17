import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

  
	const handleSubmit = (e) => {
	console.log(import.meta.env.VITE_SERVICE_ID);

		e.preventDefault();
		emailjs
			.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
			.then((result) => {
				alert("Message Sent Successfully");
				setFormData({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch(() => alert("Message Not Sent"));
	};

	return (
		<section
			id="contact"
			className="min-w-screen flex items-center justify-center py-2"
		>
			<div className="px-4  w-[550px]">
				<h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent text-center">
					Get In Touch
				</h2>
				<form
					className="space-y-6"
					onSubmit={handleSubmit}
				>
					<div className="reative">
						<input
							type="text"
							id="name"
							name="from_name"
							required
							value={formData.name}
							className="w-full bg-white/5 border border-white/10  rounded px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
							placeholder="Name..."
							onChange={(e) =>
								setFormData({
									...formData,
									name: e.target.value,
								})
							}
						/>
					</div>

					<div className="reative">
						<input
							type="email"
							id="email"
							name="reply_to"
							value={formData.email}
							required
							className="w-full bg-white/5 border border-white/10  rounded px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
							placeholder="example@gmail.com"
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
						/>
					</div>

					<div className="reative">
						<textarea
							id="message"
							name="message"
							rows={4}
							required
							value={formData.message}
							className="w-full bg-white/5 border border-white/10  rounded px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
							placeholder="Your Message..."
							onChange={(e) =>
								setFormData({
									...formData,
									message: e.target.value,
								})
							}
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgbe(59,130,246,0.4)]"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
