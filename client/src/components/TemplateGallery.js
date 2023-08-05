const templates = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1624451315811-3e043779d561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1624451315811-3e043779d561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1624451315811-3e043779d561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80",
  },
];
const TemplateGallery = () => {
  return (
    <>
      <div class="flex mx-auto px-4">
        <section class="pt-8 px-4">
          <div class="flex flex-wrap justify-center -mx-4 md:space-x-[50px]">
            {templates.map((template) => {
              return (
                <div className="px-4 mb-8 justify-center ">
                  <img
                    className="rounded-lg object-cover sm:w-[500px] ls:w-[300px] h-[400px] shadow-lg shadow-blue-400"
                    src={template.img}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default TemplateGallery;
