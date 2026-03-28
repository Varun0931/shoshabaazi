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
        <h1 className="font-heading text-4xl text-ink mb-4">You're in the queue!</h1>
        <p className="font-body text-ink/60 text-lg">
          We'll review your application and be in touch within 3–5 days. Welcome to Shoshabaazi.
        </p>
      </main>
    )
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-20">
      <h1 className="font-heading text-5xl text-ink mb-3">Apply to join</h1>
      <p className="font-body text-ink/50 mb-10">
        Takes 3 minutes. We read every application personally.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

        <div>
          <label className="font-body text-sm text-ink/60 block mb-1">Full name</label>
          <input {...register("name", { required: true })}
            className="w-full border border-gold/40 rounded-xl px-4 py-3 font-body bg-transparent
                       focus:outline-none focus:border-saffron transition"
            placeholder="Your name" />
          {errors.name && <p className="text-saffron text-sm mt-1">Name is required</p>}
        </div>

        <div>
          <label className="font-body text-sm text-ink/60 block mb-1">Email</label>
          <input {...register("email", { required: true })}
            type="email"
            className="w-full border border-gold/40 rounded-xl px-4 py-3 font-body bg-transparent
                       focus:outline-none focus:border-saffron transition"
            placeholder="you@email.com" />
          {errors.email && <p className="text-saffron text-sm mt-1">Email is required</p>}
        </div>

        <div>
          <label className="font-body text-sm text-ink/60 block mb-1">What neighbourhood are you in?</label>
          <input {...register("area")}
            className="w-full border border-gold/40 rounded-xl px-4 py-3 font-body bg-transparent
                       focus:outline-none focus:border-saffron transition"
            placeholder="e.g. Hauz Khas, Lajpat Nagar, Noida..." />
        </div>

        <div>
          <label className="font-body text-sm text-ink/60 block mb-1">
            What are you looking for in Shoshabaazi?
          </label>
          <textarea {...register("reason", { required: true })} rows={4}
            className="w-full border border-gold/40 rounded-xl px-4 py-3 font-body bg-transparent
                       focus:outline-none focus:border-saffron transition resize-none"
            placeholder="Be honest. We like honesty." />
          {errors.reason && <p className="text-saffron text-sm mt-1">Tell us a little about yourself</p>}
        </div>

        <button type="submit"
          className="bg-saffron text-white py-4 rounded-full font-body text-lg hover:bg-orange-600 transition">
          Submit application
        </button>

      </form>
    </main>
  )
}