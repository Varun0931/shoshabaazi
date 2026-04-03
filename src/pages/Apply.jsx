import { useForm } from "react-hook-form"
import { useState } from "react"

export default function Apply() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(data) {
    console.log("Application:", data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="max-w-xl mx-auto px-6 py-32 text-center">
        <p className="font-label text-mag-gold text-xs mb-4">Application received</p>
        <h1 className="font-heading text-4xl text-cream mb-4">You're in the queue!</h1>
        <div className="divider-dash max-w-xs mx-auto" />
        <p className="font-editorial italic text-cream/60 text-lg mt-6">
          We'll review your application and be in touch within 3–5 days. Welcome to Shoshabaazi.
        </p>
      </main>
    )
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-20">

      <p className="font-label text-mag-gold text-xs mb-4">Join us</p>
      <h1 className="font-heading text-5xl text-cream mb-2">Apply to join</h1>
      <div className="divider-dash" />
      <p className="font-editorial italic text-cream/50 mb-10 mt-4">
        Takes 3 minutes. We read every application personally.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

        <div>
          <label className="font-label text-xs text-cream/50 block mb-2">Full name</label>
          <input {...register("name", { required: true })}
            className="w-full border border-mag-gold/30 px-4 py-3 font-ui bg-transparent text-cream
                       focus:outline-none focus:border-mag-red transition placeholder:text-cream/20"
            placeholder="Your name" />
          {errors.name && <p className="text-mag-red font-ui text-sm mt-1">Name is required</p>}
        </div>

        <div>
          <label className="font-label text-xs text-cream/50 block mb-2">Email</label>
          <input {...register("email", { required: true })}
            type="email"
            className="w-full border border-mag-gold/30 px-4 py-3 font-ui bg-transparent text-cream
                       focus:outline-none focus:border-mag-red transition placeholder:text-cream/20"
            placeholder="you@email.com" />
          {errors.email && <p className="text-mag-red font-ui text-sm mt-1">Email is required</p>}
        </div>

        <div>
          <label className="font-label text-xs text-cream/50 block mb-2">What neighbourhood are you in?</label>
          <input {...register("area")}
            className="w-full border border-mag-gold/30 px-4 py-3 font-ui bg-transparent text-cream
                       focus:outline-none focus:border-mag-red transition placeholder:text-cream/20"
            placeholder="e.g. Hauz Khas, Lajpat Nagar, Noida..." />
        </div>

        <div>
          <label className="font-label text-xs text-cream/50 block mb-2">
            What are you looking for in Shoshabaazi?
          </label>
          <textarea {...register("reason", { required: true })} rows={4}
            className="w-full border border-mag-gold/30 px-4 py-3 font-ui bg-transparent text-cream
                       focus:outline-none focus:border-mag-red transition resize-none placeholder:text-cream/20"
            placeholder="Be honest. We like honesty." />
          {errors.reason && <p className="text-mag-red font-ui text-sm mt-1">Tell us a little about yourself</p>}
        </div>

        <button type="submit"
          className="bg-mag-red text-cream py-4 font-label text-xs hover:bg-mag-burnt transition">
          Submit application
        </button>

      </form>
    </main>
  )
}
