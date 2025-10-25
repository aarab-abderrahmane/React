import List from "./List";
import { createContext, useState,useEffect ,useMemo} from "react";
import { SparklesText } from "./ui/sparkles-text";

import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export const todosContext = createContext()

export  function TodoList() {

  const [inputContent, setInputContent] = useState("");

  const [activeSparkles, setActiveSparkles] = useState(false);


  const Typing = (e) => {
    setInputContent(e.target.value);
    e.target.value.length > 4
      ? setActiveSparkles(true)
      : setActiveSparkles(false);
  };



  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved || saved == "null"
      ? JSON.parse(saved)
      : [
          { id: 0, content: "example todo1", modeEdit: false, check: true },
          { id: 1, content: "example todo2", modeEdit: false, check: false },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (inputContent) => {
    if (inputContent.length > 4) {
      setTodos([
        ...todos,
        {
          id: todos.length++,
          content: inputContent,
          modeEdit: false,
          check: false,
        },
      ]);
    }
  };

  const handleCheck = (e) =>
    setTodos(
      todos.map((td) => {
        if (td.id === Number(e.target.value)) {
          return { ...td, check: e.target.checked, modeEdit: false };
        }

        return td;
      })
    );

  const handleEdit = (list_id) =>
    setTodos(
      todos.map((td) => (td.id === list_id ? { ...td, modeEdit: true } : td))
    );

  const UpdateContent = (e, list_id) =>
    setTodos(
      todos.map((td) => {
        console.log(e.target.value);
        if (td.id === list_id) {
          if (typeof td.oldcontent === "undefined") {
            return { ...td, oldcontent: td.content, content: e.target.value };
          }
          return { ...td, content: e.target.value };
        }

        return td;
      })
    );

  const handleSave = (id, newValue) => {
    console.log(newValue);
    return setTodos(
      todos.map((td) => {
        if (td.id === id) {
          let content = td.content;
          if (newValue.length > 4) {
            content = newValue;
          }
          return { id: td.id, content: content, modeEdit: false, check: false };
        }

        return td;
      })
    );
  };


    const ListTodos = useMemo(() => {

    if (todos && todos.length > 0) {
      return todos.map((td) => (
        <List
          id={td.id}
          content={td.content}
          modeEdit={td.modeEdit}
          check={td.check}
        />
      ));
    } else {

      return (
        <Alert variant="default">
          <AlertCircleIcon />
          <AlertTitle>No tasks found.</AlertTitle>
          <AlertDescription>
            <p className="pe-[10vw]">Please note the following :</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>The task list is empty.</li>
              <li>You can add new tasks using the 'Add to list' button.</li>
              <li>
                Tasks can be deleted by clicking on the task; it will be removed
                immediately.
              </li>
              <li>
                Edit tasks by clicking the edit icon after hovering over the
                task, then save changes.
              </li>
              <li>
                Tasks are stored in your browser's local storage; clearing
                storage will remove them.
              </li>
            </ul>
          </AlertDescription>
        </Alert>
      );
    }
  },[todos]);




  return (
    <todosContext.Provider  value={{todos,handleAdd,handleCheck,handleEdit,handleSave,UpdateContent}}>

    <div className="flex flex-col gap-6  w-[90vw]  md:w-[50vw]    max-w-[550px] h-[90vh]  max-h-[850px]">
      {/* <!-- Input --> */}
      <div className="glass rounded-2xl  shadow-lg flex flex-col items-center space-y-3 md:hover:scale-[1.04]">
        <input
          type="text"
          placeholder="Write here anything"
          className=" flex-1 bg-[var(--color-secondary)] text-[var(--color-placeholder)] w-[90%] placeholder-gray-600 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-400"
          value={inputContent}
          onChange={Typing}
        />

        <button
          onClick={() => {
            setInputContent("");
            setActiveSparkles(false);
            handleAdd(inputContent);
          }}
          className="glass rounded-full transition w-[70%] flex justify-center items-center  drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] active:scale-[0.95]  "
          style={{ backgroundColor: "var(--color-button)" }}
        >
          {activeSparkles ? (
            <SparklesText>Add to list</SparklesText>
          ) : (
            <h1 className="text-lg font-normal ">Add to list</h1>
          )}
          <i class="bi bi-caret-right-fill ms-2"></i>
        </button>
      </div>

      {/* <!-- Todo List --> */}
      <div className="glass relative flex-1  rounded-3xl shadow-lg    max-h-[50vh] md:max-h-[80vh]  overflow-y-hidden md:hover:scale-[1.04] ">
        <div className="mb-4 sticky top-0 z-20">
          <h2 className="text-center text-xl lg:text-2xl font-bold text-[var(--color-text)]  py-4">
            Todo List <i class="bi bi-clipboard-minus"></i>
          </h2>
          <div className="h-[3px] bg-white/50 rounded-full "></div>
        </div>
        <div className="overflow-y-scroll overflow-x-hidden max-h-[calc(50vh-10px)] p-4 pb-8 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]">
          <ul className="space-y-3">
            {ListTodos}
          </ul>
        </div>
      </div>
    </div>

    </todosContext.Provider>

  );


}
