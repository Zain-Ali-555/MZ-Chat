const App = () => {
  return (
    <>
      <div className="main bg-black text-white h-screen w-full">
        <h1 className="pt-10 text-3xl flex justify-center">MZ Chat</h1>
        <div className="btns h-[88vh] w-full flex justify-center items-center gap-10">
          <div className="chatBtn border-2 rounded-2xl p-2 cursor-pointer">
            <h5>Start Chat</h5>
          </div>
          <div className="SendBtn border-2 rounded-2xl p-2 cursor-pointer">
            <h5>Send File</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
