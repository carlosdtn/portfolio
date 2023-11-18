interface PostLayoutProps {
  children: React.ReactNode;
}

const PostLayout = ({ children }: PostLayoutProps) => {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[90%] md:w-[80%] lg:w-[50.15rem] flex flex-col gap-8 md:gap-12 my-12 md:my-16">
        {children}
      </main>
    </div>
  );
};

export default PostLayout;
