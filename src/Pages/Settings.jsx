
function Settings() {
  
  return (
    <div>
      <h1 className="text-2xl mb-5 font-semibold">Theme</h1>
    <div className="flex flex-row gap-10 ">

    <button className="h-15 w-30 bg-gray-500 ml-5 cursor-pointer rounded-2xl"
    >Dark Theme</button>
    
    <button className="h-15 w-30 bg-gray-500 cursor-pointer rounded-2xl"
    >Light Theme</button>
    
    <button className="h-15 w-30 bg-gray-500 cursor-pointer rounded-2xl"
    >System Default</button>
    </div>
    
  <div className="flex flex-col">
    <button className="w-40 h-10 mb-5 mt-5 bg-gray-100">Report</button>
    <button className="w-40 h-10 mb-5 mt-1 bg-gray-100">Help</button>
    <button className="w-40 h-10 mb-5 mt-1 bg-gray-100">About</button>

    </div>
    </div>
  );
}
export default Settings;