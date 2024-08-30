import MenuContainer from "../menu/MenuContainer";

const SettingsContainer = () => {
  return (
    <div className="w-full flex flex-col max-h-screen">
      <>
        <div className="fixed top-0 left-0 flex items-center bg-slate-500 w-full p-1">
          <MenuContainer isHomeScreen={false} />
        </div>
        <div className=" mt-9 bg-slate-500 px-4 py-2 mb-2 w-full"></div>
      </>
    </div>
  );
};

export default SettingsContainer;
