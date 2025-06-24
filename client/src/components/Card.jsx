import { CiCirclePlus } from "react-icons/ci";

export function Card({ options }) {
  const { formFields, formHeading, addMore, columns } = options;

  return (
    <div className="p-2">
      <h6 className="pl-3 capitalize text-gray-600">{formHeading}</h6>
      <div className="bg-gray-300 p-6 rounded-2xl">
        <form
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {formFields.map((field) => {
            const { inputField, type, name, placeholder } = field;

            const isTextarea = inputField === "textarea";

            return (
              <div key={name} className={isTextarea ? `col-span-full` : ``}>
                {inputField === "input" && (
                  <input
                    type={type}
                    name={name}
                    className="w-full bg-white rounded-lg p-2 outline-blue-500"
                    placeholder={placeholder}
                  />
                )}
                {isTextarea && (
                  <textarea
                    name={name}
                    className="w-full bg-white rounded-lg p-2 outline-blue-500"
                    placeholder={placeholder}
                  />
                )}
              </div>
            );
          })}
        </form>

        {addMore && (
          <div className="flex items-center gap-1 mt-4 justify-end">
            <CiCirclePlus className="text-blue-600 hover:cursor-pointer" />
            <h4 className="text-blue-600 hover:cursor-pointer">Add more</h4>
          </div>
        )}
      </div>
    </div>
  );
}
