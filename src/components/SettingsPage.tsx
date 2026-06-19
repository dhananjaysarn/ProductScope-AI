export default function SettingsPage() {

  return (
    <div>

      <h1
      className="
      text-4xl
      font-bold
      mb-8
      "
      >
        Settings
      </h1>

      <div
      className="
      bg-white/5
      p-8
      rounded-3xl
      "
      >

        <label>
          Name
        </label>

        <input
        className="
        w-full
        p-4
        rounded-xl
        bg-black/20
        mt-2
        mb-6
        "
        />

        <label>
          Email
        </label>

        <input
        className="
        w-full
        p-4
        rounded-xl
        bg-black/20
        mt-2
        mb-6
        "
        />

        <button
        className="
        px-8
        py-3
        rounded-xl
        bg-violet-600
        "
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}