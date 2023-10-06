import qrcode from "./assets/images/image-qr-code.png";
function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#d5e1ef]">
        <main className="p-4 bg-white rounded-2xl w-[300px] h-fit flex flex-col justify-around items-center">
          <img src={qrcode} className="rounded-xl" alt="" />
          <div className="p-2 flex flex-col justify-center items-center">
            <center>
              <h1 className="text-xl font-bold my-2 text-gray-800">
                Improve your front-end skills by building projects
              </h1>
              <p className="text-sm my-3 text-gray-600">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </center>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
