export function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-secondary/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-primary/25 blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-secondary/20 blur-3xl animate-blob [animation-delay:-12s]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
