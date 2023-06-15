import { developers } from "../../data/developer";

const Developer = () => {
  console.log(developers);
  return (
    <div className="dev bg-[#2E2D2D] p-6 rounded-[27px] mt-5 mb-10">
      <div className="grid grid-cols-2 gap-7">
        {developers.map((dev) => (
          <div className="flex mb-7 items-center" key={dev.id}>
            <div>
              <img
                src={dev.profile}
                alt=""
                width={120}
                height={120}
                className="me-3 rounded-full"
              />
            </div>
            <div>
              <h2 className="text-[27px] font-semibold mb-3">{dev.name}</h2>
              <div className="flex flex-wrap">
                {dev.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`me-3 mb-3 py-1 px-4 text-[13px] font-semibold rounded-full ${
                      skill === "Frontend"
                        ? "bg-[#834BCA]"
                        : skill === "Backend"
                        ? "bg-[#B94545]"
                        : skill === "UI / UX"
                        ? "bg-[#3370CC]"
                        : ""
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developer;
