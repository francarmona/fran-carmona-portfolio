<script>
  let name = 'world'
</script>

<form action="#" class="space-y-6">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your name</label
      >
      <input
        type="text"
        id="name"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300 dark:shadow-sm-light"
        placeholder="John Doe"
        required
      />
    </div>
    <div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your email</label
      >
      <input
        type="email"
        id="email"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300 dark:shadow-sm-light"
        placeholder="john-doe@email.com"
        required
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
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300"
      placeholder="Hey Fran!"
    ></textarea>
  </div>
  <button
    type="submit"
    class="py-3 px-5 text-sm w-full font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
    >Send message</button
  >
</form>
