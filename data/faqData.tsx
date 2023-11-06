import React from "react";
export const faqs: {
	question: string;
	answer: string | React.ReactElement;
}[] = [
	{
		question: "What courses do you offer?",
		answer: "We offer a wide range of courses in various domains, including programming, data science, business, and more. You can explore our course catalog to see the full list of offerings.",
	},
	{
		question: "How do I enroll in a course?",
		answer: "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click the 'Enroll' button. Follow the on-screen instructions to complete the enrollment process.",
	},
	{
		question: "Are the courses self-paced?",
		answer: "Yes, most of our courses are designed to be self-paced, allowing you to study at your own convenience. However, some courses may have specific start and end dates.",
	},
	{
		question: "Do you offer certificates upon course completion?",
		answer: "Yes, we provide certificates of completion for most courses. These certificates can be a valuable addition to your resume and professional profile.",
	},
	{
		question: "How can I pay for a course?",
		answer: "We offer multiple payment options, including credit/debit cards, PayPal, and more. You can choose your preferred payment method during the enrollment process.",
	},
	{
		question: "Is there any financial assistance available for courses?",
		answer: "Yes, we offer financial assistance and scholarships for eligible students. Please visit our financial aid page for more information and application details.",
	},
	{
		question: "Can I access course materials on mobile devices?",
		answer: "Absolutely! Our platform is mobile-friendly, and you can access course materials on your smartphone or tablet using our mobile app or a web browser.",
	},
];

export default faqs;
