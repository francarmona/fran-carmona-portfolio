<script lang="ts">
  import toast, { Toaster } from 'svelte-french-toast'

  const INITIAL_ERRORS = {
    name: false,
    email: false,
    message: false
  }

  const TOAST_CONFIG: any = {
    position: 'bottom-right'
  }

  let errors: Record<'name' | 'email' | 'message', boolean> = INITIAL_ERRORS

  const validateForm = (formData: FormData) => {
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    if (!name || !email || !message) {
      errors = {
        name: !name,
        email: !email,
        message: !message
      }
    } else {
      errors = INITIAL_ERRORS
    }
  }

  const isValidForm = (): boolean => {
    return !Object.values(errors).some((val: boolean) => val)
  }

  const handleSubmit = async (e: SubmitEvent) => {
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)

    validateForm(formData)

    if (isValidForm()) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: formData
        })

        if (!response.ok) {
          const result = await response.json()
          if (result.errors) {
            errors = result.errors
            return
          }
          toast.error(
            'There was an error while trying to send the message. Please try submitting again.',
            TOAST_CONFIG
          )
          return
        }

        form.reset()
        toast.success('Your message has been sent! Thanks!', TOAST_CONFIG)
      } catch (error: any) {}
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-6">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your name</label
      >
      <input
        type="text"
        id="name"
        class:border-red-600={errors.name}
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300 dark:shadow-sm-light"
        placeholder="John Doe"
        name="name"
      />
    </div>
    <div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your email</label
      >
      <input
        type="email"
        id="email"
        class:border-red-600={errors.email}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300 dark:shadow-sm-light"
        placeholder="john-doe@email.com"
        name="email"
      />
    </div>
  </div>
  <div class="sm:col-span-2">
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >Your message</label
    >
    <textarea
      id="message"
      rows="6"
      class:border-red-600={errors.message}
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300"
      placeholder="Hey Fran!"
      name="message"
    ></textarea>
  </div>
  <button
    type="submit"
    class="rounded-lg w-full text-sm bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-600/90 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-700"
    >Send message</button
  >
  <Toaster />
</form>
