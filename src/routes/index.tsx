import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import {
  Activity, AlertTriangle, ArrowUpRight, Bell, Boxes, BrainCircuit, CalendarDays, Camera,
  Check, ChevronDown, ChevronRight, CircleGauge, Clock3, CloudOff, Cpu, Database, Filter,
  BarChart3, LayoutDashboard, LogIn, LogOut, MapPinned, Menu, Moon, MoveRight, Network, PackageCheck, Radio,
  ScanLine, ShieldCheck, ShoppingBasket, Store, Sun, Users, UserRoundCheck,
  Video, Wifi, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import entranceImg from "@/assets/camera-entrance.jpg";
import checkoutImg from "@/assets/camera-checkout.jpg";
import groceryImg from "@/assets/camera-grocery.jpg";
import electronicsImg from "@/assets/camera-electronics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Operations Command Center — RetailRetina" },
    { name: "description", content: "Real-time shopper analytics, inventory intelligence, and queue optimization powered by private edge AI." },
    { property: "og:title", content: "Operations Command Center — RetailRetina" },
    { property: "og:description", content: "Real-time retail intelligence powered by private, on-device AI." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: RetailRetinaDashboard,
});

type Tab = "overview" | "staffing" | "heatmap" | "inventory" | "queues" | "architecture";
type Icon = ComponentType<{ className?: string }>;

const tabs: { id: Tab; label: string; icon: Icon }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "staffing", label: "Traffic & Staffing", icon: BarChart3 },
  { id: "heatmap", label: "Demand Heat Map", icon: MapPinned },
  { id: "inventory", label: "Inventory Radar", icon: Boxes },
  { id: "queues", label: "Queue Optimizer", icon: Users },
  { id: "architecture", label: "Edge & Privacy", icon: Cpu },
];

function RetailRetinaDashboard() {
  const [tab, setTab] = useState<Tab>("overview");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rush, setRush] = useState(false);
  const [stockout, setStockout] = useState(false);
  const [activeShoppers, setActiveShoppers] = useState(142);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const selectTab = (id: Tab) => { setTab(id); setMenuOpen(false); };
  return (
    <div className="min-h-screen bg-background text-foreground lg:flex">
        <aside className={`${menuOpen ? "flex" : "hidden"} fixed inset-0 z-50 flex-col border-r border-border bg-card p-4 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-60 lg:shrink-0`}>
           <div className="mb-7 flex items-center gap-3 px-2 py-2"><div className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground"><ScanLine className="size-5"/></div><div><div className="font-display text-lg font-bold">RetailRetina</div><div className="text-[9px] font-bold uppercase text-muted-foreground">Retail Intelligence</div></div><Button variant="ghost" size="icon" className="ml-auto lg:hidden" onClick={() => setMenuOpen(false)}><X/></Button></div>
          <div className="mb-3 px-3"><div className="text-[9px] font-bold uppercase text-muted-foreground">Flagship network</div></div>
          <nav className="space-y-1">
            {tabs.map(({ id, label, icon: Icon }) => <Button key={id} variant="ghost" className={`w-full justify-start text-xs ${tab === id ? "bg-insight-soft text-insight hover:bg-insight-soft hover:text-insight" : "text-muted-foreground"}`} onClick={() => selectTab(id)}><Icon/>{label}</Button>)}
          </nav>
          <div className="mt-auto space-y-3">
            <div className="rounded-md border border-border bg-background p-3"><div className="flex items-center gap-3"><div className="flex size-8 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">FS</div><div><div className="text-xs font-bold">Flagship Store #001</div><div className="text-[10px] text-muted-foreground">Downtown • Enterprise</div></div></div></div>
            <div className="flex items-center gap-3 border-t border-border px-2 pt-3"><div className="flex size-8 items-center justify-center rounded-full bg-insight-soft text-xs font-bold text-insight">AM</div><div className="min-w-0"><div className="truncate text-xs font-bold">Alex Morgan</div><div className="text-[10px] text-muted-foreground">Operations Lead</div></div><span className="ml-auto size-2 rounded-full bg-optimal"/></div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 p-4 lg:p-7">
          <div className="mx-auto max-w-[1520px]">
            <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-start gap-3"><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(true)}><Menu/></Button><div><h1 className="font-display text-2xl font-bold">{tab === "overview" ? "Monitoring" : tabs.find(t => t.id === tab)?.label}</h1><p className="mt-1 text-sm text-muted-foreground">Real-time store visibility and operational monitoring across your network.</p></div></div>
              <div className="flex flex-wrap items-center gap-2"><div className="hidden items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs md:flex"><CalendarDays className="size-4"/>Sep 19, 2026 • Live<ChevronDown className="size-3"/></div><Button variant="outline" size="sm"><Filter/>Filters</Button><Button variant="outline" size="icon"><Bell/></Button><div className="flex items-center gap-2 px-1"><Sun className="size-3 text-muted-foreground"/><Switch checked={dark} onCheckedChange={setDark} aria-label="Toggle dark mode"/><Moon className="size-3 text-muted-foreground"/></div></div>
            </div>
            <div className="mb-5 flex flex-col gap-3 rounded-md border border-optimal/25 bg-card px-4 py-3 sm:flex-row sm:items-center"><div className="flex flex-1 items-center gap-2"><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-optimal opacity-60"/><span className="relative size-2 rounded-full bg-optimal"/></span><span className="text-xs font-bold">Connected Edge Nodes: 12/12 Online</span><span className="text-xs text-muted-foreground">• 0 Cloud Latency</span></div><div className="flex flex-wrap gap-2"><Button variant={rush ? "destructive" : "outline"} size="sm" onClick={() => { setRush(v => !v); if (!rush) setTab("queues"); }}><Users/>{rush ? "End Rush" : "Simulate Rush"}</Button><Button variant={stockout ? "destructive" : "outline"} size="sm" onClick={() => { setStockout(v => !v); if (!stockout) setTab("inventory"); }}><PackageCheck/>{stockout ? "Reset Shelf" : "Stock-out"}</Button></div></div>
             {tab === "overview" && <Overview rush={rush} stockout={stockout} activeShoppers={activeShoppers} setActiveShoppers={setActiveShoppers}/>} 
             {tab === "staffing" && <TrafficStaffing rush={rush} activeShoppers={activeShoppers}/>} 
            {tab === "heatmap" && <DemandHeatMap rush={rush}/>} 
            {tab === "inventory" && <Inventory stockout={stockout} setStockout={setStockout}/>} 
            {tab === "queues" && <Queues rush={rush} setRush={setRush}/>} 
            {tab === "architecture" && <Architecture/>}
          </div>
        </main>
    </div>
  );
}

function SectionTitle({ icon: Icon, title, note }: { icon: Icon; title: string; note?: string }) {
  return <div className="mb-4 flex items-center justify-between"><div><h2 className="flex items-center gap-2 text-sm font-extrabold"><Icon className="size-4 text-insight"/>{title}</h2>{note && <p className="mt-1 text-xs text-muted-foreground">{note}</p>}</div><span className="font-mono text-[10px] text-optimal">● LIVE</span></div>;
}

function useDeviceCamera() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [deviceIndex, setDeviceIndex] = useState(0);

  const stop = () => { setStream((current) => { current?.getTracks().forEach((t) => t.stop()); return null; }); };

  const open = async () => {
    setError(null);
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) { setError("This browser does not allow camera access."); return; }
    try {
      const selected = devices[deviceIndex];
      const next = await navigator.mediaDevices.getUserMedia({ video: selected ? { deviceId: { exact: selected.deviceId } } : true, audio: false });
      setStream((current) => { current?.getTracks().forEach((t) => t.stop()); return next; });
      const available = (await navigator.mediaDevices.enumerateDevices()).filter((device) => device.kind === "videoinput");
      setDevices(available);
    } catch {
      setError("Camera access was blocked. Allow camera permission in your browser, then try again.");
    }
  };

  useEffect(() => () => { stream?.getTracks().forEach((t) => t.stop()); }, [stream]);

  const nextDevice = () => { if (devices.length < 2) return; stop(); setDeviceIndex((current) => (current + 1) % devices.length); };
  return { stream, error, devices, deviceIndex, active: !!stream, start: () => void open(), stop, nextDevice };
}

function Overview({ rush, stockout, activeShoppers, setActiveShoppers }: { rush: boolean; stockout: boolean; activeShoppers: number; setActiveShoppers: React.Dispatch<React.SetStateAction<number>> }) {
  const cameraOne = useDeviceCamera();
  const cameraTwo = useDeviceCamera();
  const [crossings, setCrossings] = useState([{ entries: 0, exits: 0 }, { entries: 0, exits: 0 }]);
  const registerCrossing = useCallback((camera: number, direction: "in" | "out") => {
    setActiveShoppers((current) => direction === "in" ? current + 1 : Math.max(0, current - 1));
    setCrossings((current) => current.map((count, index) => index === camera ? { entries: count.entries + (direction === "in" ? 1 : 0), exits: count.exits + (direction === "out" ? 1 : 0) } : count));
  }, [setActiveShoppers]);
  const kpis = [
    { label: "Store Traffic Today", value: rush ? "3,126" : "2,845", meta: "+12% vs average", icon: ShoppingBasket, color: "text-insight", bg: "bg-insight-soft" },
    { label: "Active Shoppers", value: String(activeShoppers + (rush ? 76 : 0)), meta: "Live tripwire count", icon: Users, color: rush ? "text-warning" : "text-optimal", bg: rush ? "bg-warning-soft" : "bg-optimal-soft" },
    { label: "Stock-out Risk", value: stockout ? "4 items" : "3 items", meta: "Urgent attention", icon: AlertTriangle, color: "text-critical", bg: "bg-critical-soft" },
    { label: "Avg. Queue Wait", value: rush ? "4m 18s" : "1m 45s", meta: rush ? "Above threshold" : "Optimal", icon: Clock3, color: rush ? "text-critical" : "text-optimal", bg: rush ? "bg-critical-soft" : "bg-optimal-soft" },
    { label: "Data Processed Locally", value: "98.4%", meta: "Privacy-first edge AI", icon: CloudOff, color: "text-insight", bg: "bg-insight-soft" },
    { label: "Aisle Coverage", value: "92.4%", meta: "+1.7% vs last hour", icon: Activity, color: "text-optimal", bg: "bg-optimal-soft" },
  ];
  return <div className="space-y-5">
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">{kpis.map(({ label, value, meta, icon: Icon, color, bg }, index) => <div key={label} className="rounded-md border border-border bg-card p-4 shadow-sm"><div className="flex items-start justify-between"><span className="text-[10px] font-bold uppercase text-muted-foreground">{label}</span><span className={`rounded-md p-1.5 ${bg} ${color}`}><Icon className="size-4"/></span></div><div className="mt-3 font-display text-xl font-bold">{value}</div><div className={`mt-1 text-[10px] font-bold ${color}`}>{meta}</div><svg viewBox="0 0 100 16" className="mt-3 h-5 w-full text-insight" aria-hidden="true"><path d={index % 2 ? "M0 12 L10 8 L20 11 L30 5 L40 10 L50 6 L60 12 L70 4 L80 9 L90 5 L100 8" : "M0 9 L10 11 L20 6 L30 12 L40 5 L50 9 L60 4 L70 10 L80 6 L90 11 L100 7"} fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></div>)}</div>
    {rush && <div className="flex flex-col gap-3 rounded-md border border-warning/40 bg-warning-soft p-4 sm:flex-row sm:items-center"><AlertTriangle className="size-5 shrink-0 text-warning"/><div className="flex-1"><div className="text-sm font-bold">Queue spike detected at Checkout Zone</div><div className="text-xs text-muted-foreground">Entrance inflow is 40% above baseline. Counter 4 should be opened now.</div></div><Button size="sm" onClick={() => {}}>Review staffing <ChevronRight/></Button></div>}
    <div className="grid gap-4 xl:grid-cols-12">
      <div className="rounded-md border border-border bg-card p-4 shadow-sm xl:col-span-7"><SectionTitle icon={Camera} title="Live Computer Vision Grid" note="2 live inputs • local motion tracking • no identifiable data stored"/>
        <div className="grid gap-3 md:grid-cols-2">
          <LiveCameraSlot index={0} camera={cameraOne} image={entranceImg} title="Entrance Tripwire" counts={crossings[0]!} onCrossing={(direction) => registerCrossing(0, direction)}/>
          <LiveCameraSlot index={1} camera={cameraTwo} image={checkoutImg} title="Checkout Tripwire" counts={crossings[1]!} onCrossing={(direction) => registerCrossing(1, direction)}/>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2"><CameraFeed image={groceryImg} title="Aisle 4 • Grocery" tag={stockout ? "Shelf 2 • EMPTY DETECTED" : "Shelf health: 91%"} boxes={3} critical={stockout}/><CameraFeed image={electronicsImg} title="Aisle 7 • Electronics" tag="Shopper #218 • Dwell 1m 08s" boxes={3}/></div></div>
      <div className="space-y-4 xl:col-span-5">
        <div className="rounded-md border border-border bg-card p-4 shadow-sm"><SectionTitle icon={MapPinned} title="Store Demand Snapshot"/><div className="grid h-48 grid-cols-5 grid-rows-4 gap-2 rounded-md bg-muted/50 p-3"><div className="col-span-2 row-span-2 flex items-end rounded-md border border-warning/40 bg-warning-soft p-2 text-xs font-bold">Produce · 34</div><div className="col-span-3 row-span-2 flex items-end rounded-md border border-critical/40 bg-critical-soft p-2 text-xs font-bold text-critical">Grocery · 41</div><div className="col-span-2 row-span-2 flex items-end rounded-md border border-optimal/40 bg-optimal-soft p-2 text-xs font-bold">Electronics · 18</div><div className="col-span-3 flex items-end rounded-md border border-optimal/40 bg-optimal-soft p-2 text-xs font-bold">Entrance · 11</div><div className="col-span-3 flex items-end rounded-md border border-warning/40 bg-warning-soft p-2 text-xs font-bold">Checkout · 15</div></div></div>
        <div className="grid grid-cols-2 gap-4"><div className="rounded-md border border-border bg-card p-4 shadow-sm"><div className="text-xs font-bold">Shelf Availability</div><div className="mt-3 font-display text-3xl font-bold text-optimal">92.4%</div><div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[92%] bg-optimal"/></div><div className="mt-2 text-[10px] text-muted-foreground">3 urgent items</div></div><div className="rounded-md border border-border bg-card p-4 shadow-sm"><div className="text-xs font-bold">Edge Health</div><div className="mt-3 font-display text-3xl font-bold text-optimal">100%</div><div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-full bg-optimal"/></div><div className="mt-2 text-[10px] text-muted-foreground">12 nodes online</div></div></div>
      </div>
    </div>
  </div>;
}

type DeviceCamera = ReturnType<typeof useDeviceCamera>;

function LiveCameraSlot({ index, camera, image, title, counts, onCrossing }: { index: number; camera: DeviceCamera; image: string; title: string; counts: { entries: number; exits: number }; onCrossing: (direction: "in" | "out") => void }) {
  return <div className="rounded-md border border-border bg-background p-2">
    <TrackedCameraFeed stream={camera.stream} image={image} title={title} onCrossing={onCrossing}/>
    <div className="mt-2 flex items-center justify-between gap-2"><div><div className="text-[10px] font-bold">CAMERA {index + 1}</div><div className="font-mono text-[9px] text-muted-foreground">IN {counts.entries} • OUT {counts.exits}</div></div><div className="flex gap-1">{camera.active && camera.devices.length > 1 && <Button size="sm" variant="ghost" onClick={camera.nextDevice}>Next lens</Button>}<Button size="sm" variant={camera.active ? "outline" : "default"} onClick={camera.active ? camera.stop : camera.start}>{camera.active ? "Stop" : "Start camera"}</Button></div></div>
    {camera.error && <div className="mt-2 rounded-sm bg-critical-soft px-2 py-1.5 text-[10px] font-bold text-critical">{camera.error}</div>}
    <div className="mt-2 flex gap-1"><Button size="sm" variant="ghost" className="flex-1" onClick={() => onCrossing("in")}><LogIn/>Test entry</Button><Button size="sm" variant="ghost" className="flex-1" onClick={() => onCrossing("out")}><LogOut/>Test exit</Button></div>
  </div>;
}

type TrackBox = { id: number; x: number; y: number; w: number; h: number; confidence: number };
type Track = { id: number; cx: number; cy: number; box: TrackBox; hits: number; missed: number; side: -1 | 1 | null; lastCross: number };

const MP_VERSION = "1.0.1";
const MP_WASM = `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MP_VERSION}/wasm`;
const MP_MODEL = "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite";

function TrackedCameraFeed({ stream, image, title, onCrossing }: { stream: MediaStream | null; image: string; title: string; onCrossing: (direction: "in" | "out") => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const tracks = useRef<Track[]>([]);
  const nextId = useRef(1);
  const [boxes, setBoxes] = useState<TrackBox[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => { if (videoRef.current) videoRef.current.srcObject = stream; }, [stream]);

  useEffect(() => {
    if (!stream) { setBoxes([]); setStatus("idle"); tracks.current = []; return; }
    let cancelled = false;
    let frame = 0;
    let detector: { detectForVideo: (v: HTMLVideoElement, t: number) => { detections: unknown[] }; close: () => void } | null = null;
    let lastSample = 0;

    setStatus("loading");
    (async () => {
      try {
        // Real face detector (BlazeFace) — only human faces produce a box, so
        // shelves, carts and lighting changes can no longer become "customers".
        const vision = await import("@mediapipe/tasks-vision");
        const files = await vision.FilesetResolver.forVisionTasks(MP_WASM);
        const faceDetector = await vision.FaceDetector.createFromOptions(files, {
          baseOptions: { modelAssetPath: MP_MODEL, delegate: "GPU" },
          runningMode: "VIDEO",
          minDetectionConfidence: 0.6,
          minSuppressionThreshold: 0.3,
        });
        if (cancelled) { faceDetector.close(); return; }
        detector = faceDetector as unknown as typeof detector;
        setStatus("ready");
        frame = requestAnimationFrame(loop);
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();

    function loop(time: number) {
      frame = requestAnimationFrame(loop);
      const video = videoRef.current;
      if (!detector || !video || video.readyState < 2 || !video.videoWidth) return;
      if (time - lastSample < 90) return; // ~11 fps inference keeps the UI smooth
      lastSample = time;

      let detections: { boundingBox?: { originX: number; originY: number; width: number; height: number }; categories?: { score: number }[] }[] = [];
      try {
        detections = detector.detectForVideo(video, time).detections as typeof detections;
      } catch { return; }

      const vw = video.videoWidth, vh = video.videoHeight;
      const found = detections
        .map(d => ({ bb: d.boundingBox, score: d.categories?.[0]?.score ?? 0 }))
        .filter(d => !!d.bb && d.score > 0.62)
        .map(d => {
          const bb = d.bb!;
          // Expand the face box slightly into a head-and-shoulders box.
          const w = (bb.width / vw) * 100 * 1.25;
          const h = (bb.height / vh) * 100 * 1.35;
          const x = (bb.originX / vw) * 100 - (w - (bb.width / vw) * 100) / 2;
          const y = (bb.originY / vh) * 100 - (h - (bb.height / vh) * 100) / 2;
          return { x, y, w, h, cx: x + w / 2, cy: y + h / 2, score: d.score };
        })
        .filter(d => d.w > 3 && d.h > 4); // ignore sub-pixel false positives

      // Nearest-neighbour matching keeps a stable customer number per face.
      const open = [...tracks.current];
      const live: Track[] = [];
      for (const d of found) {
        let best: Track | null = null;
        let bestDist = Math.max(12, d.w * 1.4);
        for (const t of open) {
          const dist = Math.hypot(t.cx - d.cx, t.cy - d.cy);
          if (dist < bestDist) { bestDist = dist; best = t; }
        }
        const confidence = Math.round(d.score * 100);
        if (best) {
          open.splice(open.indexOf(best), 1);
          // Smoothing on both position and size removes the box jitter.
          const s = 0.4;
          best.cx += (d.cx - best.cx) * s;
          best.cy += (d.cy - best.cy) * s;
          const b = best.box;
          best.box = {
            id: best.id,
            x: b.x + (d.x - b.x) * s,
            y: b.y + (d.y - b.y) * s,
            w: b.w + (d.w - b.w) * s,
            h: b.h + (d.h - b.h) * s,
            confidence: Math.round(b.confidence + (confidence - b.confidence) * 0.3),
          };
          best.hits += 1;
          best.missed = 0;
          live.push(best);
        } else {
          const id = nextId.current;
          live.push({ id, cx: d.cx, cy: d.cy, box: { id, x: d.x, y: d.y, w: d.w, h: d.h, confidence }, hits: 1, missed: 0, side: null, lastCross: 0 });
        }
      }
      // Keep briefly-lost faces alive so a blink or turn doesn't renumber them.
      for (const t of open) { t.missed += 1; if (t.missed < 12) live.push(t); }
      tracks.current = live;

      // A track must be seen in 3 consecutive frames before it becomes a customer.
      for (const t of live) if (t.hits === 3 && t.id === nextId.current) nextId.current += 1;
      const confirmed = live.filter(t => t.hits >= 3 && t.missed < 5);
      setBoxes(confirmed.map(t => t.box));

      const center = 50;
      const margin = 8; // hysteresis band around the tripwire
      for (const t of confirmed) {
        if (t.missed > 0) continue;
        const currentSide: -1 | 1 | null = t.cx < center - margin ? -1 : t.cx > center + margin ? 1 : null;
        if (currentSide === null) continue;
        const before = t.side;
        t.side = currentSide;
        if (before === null || before === currentSide) continue;
        if (time - t.lastCross < 900) continue;
        t.lastCross = time;
        onCrossing(currentSide === 1 ? "in" : "out");
      }
    };

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      detector?.close();
      tracks.current = [];
    };
  }, [stream, onCrossing]);

  const statusLabel = !stream ? "CAMERA READY" : status === "loading" ? "LOADING FACE AI" : status === "error" ? "FACE AI UNAVAILABLE" : boxes.length ? `TRACKING ${boxes.length} PERSON${boxes.length > 1 ? "S" : ""}` : "SCANNING FOR FACES";

  return <div className="relative aspect-video overflow-hidden rounded-sm bg-muted">{stream ? <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover"/> : <img src={image} alt={`${title} camera preview`} className="h-full w-full object-cover saturate-[.7]"/>}
    {boxes.map(b => <div key={b.id} className="absolute rounded-sm border-2 border-optimal shadow-[0_0_12px_hsl(var(--optimal)/0.35)] transition-all duration-150 ease-out" style={{ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%` }}>
      <span className="absolute -top-4 left-0 whitespace-nowrap rounded-sm bg-optimal px-1 font-mono text-[8px] font-bold text-primary-foreground">CUSTOMER #{b.id} • {b.confidence}%</span>
    </div>)}
    <div className="absolute inset-y-0 left-1/2 border-l-2 border-dashed border-warning"><span className="absolute left-1 top-2 whitespace-nowrap rounded-sm bg-warning px-1.5 py-1 font-mono text-[8px] font-bold text-primary-foreground">AI TRIPWIRE</span></div><div className="absolute inset-x-0 bottom-0 flex justify-between bg-foreground/70 px-2 py-1.5 text-[9px] font-bold text-primary-foreground"><span>{title}</span><span>{statusLabel}</span></div></div>;
}

function CameraFeed({ image, title, tag, boxes, critical = false, stream = null }: { image: string; title: string; tag: string; boxes: number; critical?: boolean; stream?: MediaStream | null }) {
  const positions = ["left-[15%] top-[30%] h-[38%] w-[13%]", "left-[44%] top-[24%] h-[45%] w-[12%]", "right-[12%] top-[35%] h-[34%] w-[11%]", "left-[66%] top-[28%] h-[40%] w-[10%]"];
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { if (videoRef.current) videoRef.current.srcObject = stream; }, [stream]);
  return <div className="group relative aspect-video overflow-hidden rounded-md bg-muted">{stream
    ? <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover"/>
    : <img src={image} alt={`${title} live camera feed`} className="h-full w-full object-cover saturate-[.75] transition duration-500 group-hover:scale-[1.02]" width={1024} height={576}/>}<div className="absolute inset-0 bg-foreground/10"/><div className="camera-scan absolute inset-x-0 top-0 h-px bg-optimal/60"/>
    {positions.slice(0, boxes).map((p, i) => <div key={p} className={`absolute ${p} border ${critical && i === 1 ? "border-critical" : "border-optimal"}`}><span className={`absolute -top-4 left-0 font-mono text-[8px] ${critical && i === 1 ? "bg-critical" : "bg-optimal"} px-1 text-primary-foreground`}>{critical && i === 1 ? "RISK" : `ID ${104+i}`}</span></div>)}
    <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-foreground/65 px-2 py-1.5 text-primary-foreground"><span className="flex items-center gap-1.5 text-[10px] font-bold"><span className="size-1.5 rounded-full bg-critical"/>{title}</span><span className="font-mono text-[9px]">CAM-{title.length + 10} • 30 FPS</span></div><div className={`absolute bottom-2 left-2 rounded-sm ${critical ? "bg-critical" : "bg-foreground/80"} px-2 py-1 font-mono text-[9px] text-primary-foreground`}>{tag}</div></div>;
}

type DemandZone = {
  name: string;
  shoppers: number;
  rushShoppers: number;
  dwell: string;
  staff: number;
  recommended: number;
  rushRecommended: number;
  area: string;
};

const demandZones: DemandZone[] = [
  { name: "Produce", shoppers: 34, rushShoppers: 42, dwell: "6m 18s", staff: 4, recommended: 5, rushRecommended: 5, area: "col-span-3 row-span-2" },
  { name: "Bakery", shoppers: 16, rushShoppers: 21, dwell: "4m 02s", staff: 3, recommended: 3, rushRecommended: 3, area: "col-span-2 row-span-2" },
  { name: "Customer Care", shoppers: 7, rushShoppers: 9, dwell: "3m 44s", staff: 3, recommended: 2, rushRecommended: 2, area: "col-span-2 row-span-2" },
  { name: "Grocery Aisles", shoppers: 41, rushShoppers: 53, dwell: "8m 51s", staff: 8, recommended: 8, rushRecommended: 9, area: "col-span-4 row-span-3" },
  { name: "Electronics", shoppers: 18, rushShoppers: 24, dwell: "7m 12s", staff: 3, recommended: 4, rushRecommended: 4, area: "col-span-3 row-span-3" },
  { name: "Entrance", shoppers: 11, rushShoppers: 29, dwell: "0m 48s", staff: 2, recommended: 2, rushRecommended: 3, area: "col-span-2 row-span-2" },
  { name: "Checkout", shoppers: 15, rushShoppers: 40, dwell: "2m 08s", staff: 4, recommended: 5, rushRecommended: 7, area: "col-span-5 row-span-2" },
];

function StoreBlueprint() {
  const aisles = [28, 37, 46, 55, 64, 73];
  const checkouts = [36, 47, 58, 69, 80];

  return <svg aria-hidden="true" className="pointer-events-none absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] text-muted-foreground sm:inset-4 sm:h-[calc(100%-2rem)] sm:w-[calc(100%-2rem)]" viewBox="0 0 100 100" preserveAspectRatio="none">
    <g fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter">
      <path className="opacity-45" strokeWidth="1.3" d="M2 2H98V98H61M39 98H2V2"/>
      <path className="opacity-20" strokeWidth="0.45" strokeDasharray="1.2 1.2" d="M5 31H95M5 74H95M30 5V29M72 5V29M25 76V95"/>

      <g className="opacity-25" strokeWidth="0.75">
        <path d="M7 7H28V25H7zM32 7H69V25H32zM74 7H93V25H74z"/>
        <path d="M9 10H26M9 14H26M9 18H26M9 22H26"/>
        <path d="M35 10H66M35 15H66M35 20H66"/>
        <path d="M77 10H90M77 14H90M77 18H90M77 22H90"/>
      </g>

      <g className="opacity-35" strokeWidth="0.7">
        {aisles.map(x => <g key={x}><path d={`M${x} 36V68`}/><path d={`M${x + 4} 36V68`}/><path strokeWidth="0.35" d={`M${x} 40H${x + 4}M${x} 46H${x + 4}M${x} 52H${x + 4}M${x} 58H${x + 4}M${x} 64H${x + 4}`}/></g>)}
      </g>

      <g className="opacity-40" strokeWidth="0.8">
        <path d="M5 35H20V69H5zM8 39H17M8 45H17M8 51H17M8 57H17M8 63H17"/>
        <path d="M78 35H95V69H78zM81 39H92M81 46H92M81 53H92M81 60H92M81 66H92"/>
      </g>

      <g className="opacity-45" strokeWidth="0.85">
        {checkouts.map(x => <g key={x}><path d={`M${x} 80H${x + 6}V91H${x}`}/><circle cx={x + 4.8} cy="82.5" r="0.8"/></g>)}
        <path d="M7 79H25V91H7zM10 82H22M10 86H22"/>
      </g>

      <g className="opacity-55" strokeWidth="1">
        <path d="M39 98V94M61 98V94M39 94Q50 84 61 94"/>
        <path d="M46 96L50 92L54 96"/>
      </g>
    </g>
  </svg>;
}

function DemandHeatMap({ rush }: { rush: boolean }) {
  const [staffing, setStaffing] = useState<Record<string, number>>(() => Object.fromEntries(demandZones.map(zone => [zone.name, zone.staff])));
  const [lastMove, setLastMove] = useState<string | null>(null);
  const zoneData = demandZones.map(zone => ({
    ...zone,
    activeShoppers: rush ? zone.rushShoppers : zone.shoppers,
    target: rush ? zone.rushRecommended : zone.recommended,
    currentStaff: staffing[zone.name] ?? zone.staff,
  }));
  const hottest = [...zoneData].sort((a, b) => (b.activeShoppers / Math.max(b.currentStaff, 1)) - (a.activeShoppers / Math.max(a.currentStaff, 1)))[0];
  const source = [...zoneData].filter(zone => zone.currentStaff > zone.target).sort((a, b) => (b.currentStaff - b.target) - (a.currentStaff - a.target))[0];

  const moveStaff = () => {
    if (!hottest || !source || hottest.name === source.name) return;
    setStaffing(current => ({ ...current, [source.name]: (current[source.name] ?? source.staff) - 1, [hottest.name]: (current[hottest.name] ?? hottest.staff) + 1 }));
    setLastMove(`One staff member moved from ${source.name} to ${hottest.name}.`);
  };

  return <div className="space-y-5">
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(280px,.7fr)]">
      <div className="rounded-md border border-border bg-card p-4 shadow-sm">
        <SectionTitle icon={MapPinned} title="Live Store Demand Map" note="Shopper density and staff coverage by zone • updates every 5 seconds"/>
        <div className="mb-4 flex flex-wrap gap-4 text-[10px] font-bold text-muted-foreground"><span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-optimal"/>Balanced</span><span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-warning"/>High demand</span><span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-critical"/>Urgent</span><span className="ml-auto font-mono">142 ACTIVE SHOPPERS</span></div>
        <div className="relative overflow-hidden rounded-md border-2 border-border bg-background p-2 sm:p-4">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:24px_24px]"/>
          <StoreBlueprint/>
          <div className="relative z-10 grid min-h-[500px] grid-cols-7 grid-rows-7 gap-2">
            {zoneData.map(zone => {
              const gap = zone.target - zone.currentStaff;
              const urgent = gap >= 2 || zone.activeShoppers / Math.max(zone.currentStaff, 1) > 8;
              const warning = !urgent && (gap > 0 || zone.activeShoppers / Math.max(zone.currentStaff, 1) > 6);
              const tone = urgent ? "border-critical/70 bg-critical-soft/85" : warning ? "border-warning/70 bg-warning-soft/85" : "border-optimal/60 bg-optimal-soft/85";
              const text = urgent ? "text-critical" : warning ? "text-warning" : "text-optimal";
              return <div key={zone.name} className={`${zone.area} relative flex min-w-0 flex-col justify-between overflow-hidden rounded-md border ${tone} p-3 transition-colors`}>
                {(urgent || warning) && <span className={`absolute right-2 top-2 size-2 rounded-full ${urgent ? "bg-critical" : "bg-warning"} animate-pulse`}/>} 
                <div><div className="pr-4 text-xs font-extrabold sm:text-sm">{zone.name}</div><div className="mt-1 font-mono text-[9px] text-muted-foreground">DWELL {zone.dwell}</div></div>
                <div><div className={`text-xl font-extrabold sm:text-2xl ${text}`}>{zone.activeShoppers}</div><div className="text-[9px] text-muted-foreground">shoppers now</div><div className="mt-2 flex flex-wrap items-center gap-x-2 text-[9px] font-bold"><span>{zone.currentStaff} staff</span><span className={gap > 0 ? "text-critical" : "text-optimal"}>AI: {zone.target}</span></div></div>
              </div>;
            })}
          </div>
          <div className="relative mx-auto mt-2 w-32 border-t-4 border-insight pt-1 text-center font-mono text-[9px] font-bold text-insight">MAIN ENTRANCE</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-md border border-insight/40 bg-insight-soft p-4">
          <div className="flex items-center gap-2 text-xs font-extrabold text-insight"><BrainCircuit className="size-4"/>AI STAFFING RECOMMENDATION</div>
          {source && hottest && source.name !== hottest.name ? <><div className="mt-4 text-lg font-extrabold">Move 1 staff member</div><div className="mt-3 flex items-center gap-2 text-sm"><span className="rounded-sm bg-background px-2 py-1 font-bold">{source.name}</span><MoveRight className="size-4 text-insight"/><span className="rounded-sm bg-background px-2 py-1 font-bold">{hottest.name}</span></div><p className="mt-3 text-xs leading-5 text-muted-foreground">{hottest.name} has {hottest.activeShoppers} shoppers with {hottest.currentStaff} staff. Reassignment should improve response coverage by 18%.</p><Button className="mt-4 w-full" onClick={moveStaff}><UserRoundCheck/>Move Staff Now</Button></> : <div className="mt-4 flex items-center gap-3 text-sm font-bold text-optimal"><Check className="size-5"/>All zones are adequately staffed.</div>}
        </div>
        {lastMove && <div className="rounded-md border border-optimal/40 bg-optimal-soft p-4"><div className="flex gap-3 text-sm font-bold text-optimal"><Check className="size-5 shrink-0"/><span>{lastMove}</span></div><Button size="sm" variant="ghost" className="mt-2" onClick={() => setLastMove(null)}>Dismiss</Button></div>}
        <div className="rounded-md border border-border bg-card p-4"><h3 className="text-sm font-extrabold">Demand ranking</h3><div className="mt-4 space-y-3">{[...zoneData].sort((a,b) => b.activeShoppers-a.activeShoppers).slice(0,5).map((zone, index) => <div key={zone.name} className="flex items-center gap-3"><span className="font-mono text-[10px] text-muted-foreground">0{index+1}</span><div className="min-w-0 flex-1"><div className="flex justify-between gap-3 text-xs"><span className="truncate font-bold">{zone.name}</span><span className="font-mono">{zone.activeShoppers}</span></div><div className="mt-1 h-1 overflow-hidden rounded-full bg-muted"><div className={index === 0 ? "h-full bg-critical" : index < 3 ? "h-full bg-warning" : "h-full bg-optimal"} style={{ width: `${Math.min(zone.activeShoppers * 2, 100)}%` }}/></div></div></div>)}</div></div>
      </div>
    </div>
  </div>;
}

const normalProducts = [
  ["Organic Whole Milk 1L", "SKU 41987", 18, "Low stock", "Aisle 4 • Shelf 2"],
  ["Sourdough Country Loaf", "SKU 72014", 74, "In stock", "Bakery • Bay 1"],
  ["Free Range Eggs 12pk", "SKU 38421", 42, "In stock", "Aisle 4 • Shelf 5"],
  ["Sparkling Water 8pk", "SKU 51903", 8, "Critical", "Aisle 6 • Shelf 3"],
  ["Premium Ground Coffee", "SKU 84116", 65, "In stock", "Aisle 8 • Shelf 1"],
  ["Wireless Earbuds Pro", "SKU 92388", 11, "Low stock", "Aisle 7 • Display 4"],
];

function Inventory({ stockout, setStockout }: { stockout: boolean; setStockout: (v: boolean) => void }) {
  const [restocked, setRestocked] = useState(false);
  const milk = stockout && !restocked ? 0 : 18;
  const products = normalProducts.map((p, i) => i === 0 ? [p[0], p[1], milk, milk === 0 ? "Empty shelf" : "Low stock", p[4]] : p);
  return <div className="space-y-5">
    {(stockout && !restocked) && <div className="rounded-md border border-critical/40 bg-critical-soft p-4"><div className="flex items-start gap-3"><AlertTriangle className="mt-0.5 size-5 shrink-0 text-critical"/><div className="flex-1"><div className="text-sm font-extrabold text-critical">Empty Shelf Detected • Immediate Action</div><div className="mt-1 text-xs">Aisle 4 Shelf 2: Organic Milk is 100% depleted. Lost sales risk: ₹3,840/hour.</div><div className="mt-3 flex flex-wrap gap-2"><Button size="sm"><Wifi/>Trigger Restock Alert</Button><Button size="sm" variant="outline" onClick={() => setRestocked(true)}><Check/>Mark Restocked</Button><Button size="sm" variant="ghost"><Camera/>View Snapshot</Button></div></div></div></div>}
    {!stockout && <div className="rounded-md border border-warning/40 bg-warning-soft p-4"><div className="flex items-center gap-3"><BrainCircuit className="size-5 text-warning"/><div><div className="text-sm font-bold">AI Visual Detection: Replenishment forecast</div><div className="text-xs text-muted-foreground">Aisle 4 Shelf 2: Organic Milk — 82% depleted. Predicted stock-out in 22 minutes.</div></div></div></div>}
    <div className="rounded-md border border-border bg-card p-4"><SectionTitle icon={Boxes} title="Real-Time Shelf Inventory" note="6 priority SKUs monitored across 248 shelf positions"/><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{products.map(([name, sku, qty, status, location]) => { const q = Number(qty); const tone = q === 0 ? "critical" : q < 20 ? "warning" : "optimal"; const statusTone = tone === "critical" ? "bg-critical-soft text-critical" : tone === "warning" ? "bg-warning-soft text-warning" : "bg-optimal-soft text-optimal"; const gaugeTone = tone === "critical" ? "text-critical" : tone === "warning" ? "text-warning" : "text-optimal"; const barTone = tone === "critical" ? "bg-critical" : tone === "warning" ? "bg-warning" : "bg-optimal"; return <div key={String(sku)} className="rounded-md border border-border bg-background p-4"><div className="flex items-start justify-between gap-3"><div><div className="text-sm font-bold">{name}</div><div className="mt-1 font-mono text-[10px] text-muted-foreground">{sku} • {location}</div></div><span className={`rounded-sm px-2 py-1 text-[10px] font-bold ${statusTone}`}>{status}</span></div><div className="mt-5 flex items-end justify-between"><div><div className="text-2xl font-extrabold">{q}%</div><div className="text-[10px] text-muted-foreground">Shelf capacity</div></div><CircleGauge className={`size-8 ${gaugeTone}`}/></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"><div className={`h-full ${barTone}`} style={{ width: `${q}%` }}/></div></div>})}</div></div>
    {restocked && <div className="flex items-center gap-3 rounded-md border border-optimal/40 bg-optimal-soft p-4 text-sm font-bold text-optimal"><Check/>Restock confirmed by floor staff. Shelf verification queued.<Button variant="ghost" size="sm" className="ml-auto" onClick={() => { setRestocked(false); setStockout(false); }}>Dismiss</Button></div>}
  </div>;
}

function Queues({ rush, setRush }: { rush: boolean; setRush: (v: boolean) => void }) {
  const [counter4, setCounter4] = useState(false);
  const overloaded = rush && !counter4;
  const counters = [
    [1, true, overloaded ? 9 : 3, overloaded ? "4m 12s" : "1m 22s"], [2, true, overloaded ? 11 : 4, overloaded ? "5m 08s" : "1m 48s"], [3, true, overloaded ? 8 : 2, overloaded ? "3m 44s" : "0m 58s"], [4, counter4, counter4 ? 2 : 0, counter4 ? "0m 52s" : "—"], [5, true, overloaded ? 7 : 3, overloaded ? "3m 18s" : "1m 36s"], [6, false, 0, "—"],
  ];
  return <div className="space-y-5">
    {overloaded && <div className="rounded-md border border-warning/50 bg-warning-soft p-5"><div className="flex flex-col gap-4 sm:flex-row sm:items-center"><div className="flex size-10 items-center justify-center rounded-md bg-warning text-primary-foreground"><AlertTriangle/></div><div className="flex-1"><div className="text-sm font-extrabold">Queue Spike Warning</div><div className="mt-1 text-xs text-muted-foreground">Inflow at Entrance increased by 40%. Open Counter 4 in 3 minutes to prevent waits exceeding 5 minutes.</div></div><Button onClick={() => setCounter4(true)}><UserRoundCheck/>Open Counter 4 Now</Button></div></div>}
    {counter4 && <div className="flex items-center gap-3 rounded-md border border-optimal/40 bg-optimal-soft p-4 text-sm font-bold text-optimal"><Check/>Counter 4 opened. Average wait projected to normalize in 4 minutes.<Button variant="ghost" size="sm" className="ml-auto" onClick={() => { setRush(false); setCounter4(false); }}>Resolve</Button></div>}
    <div className="rounded-md border border-border bg-card p-4"><SectionTitle icon={Users} title="Live Checkout Line Monitor" note="Wait-time inference updates every 2 seconds"/><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{counters.map(([id, open, queue, wait]) => <div key={String(id)} className={`rounded-md border p-4 ${open ? "border-border bg-background" : "border-border bg-muted/40"}`}><div className="flex items-center justify-between"><div className="text-sm font-extrabold">Counter {id}</div><span className={`flex items-center gap-1.5 text-[10px] font-bold ${open ? "text-optimal" : "text-muted-foreground"}`}><span className={`size-1.5 rounded-full ${open ? "bg-optimal" : "bg-muted-foreground"}`}/>{open ? "OPEN" : "CLOSED"}</span></div><div className="mt-5 grid grid-cols-2 divide-x divide-border"><div><div className="text-2xl font-extrabold">{queue}</div><div className="text-[10px] text-muted-foreground">People in queue</div></div><div className="pl-4"><div className={`text-2xl font-extrabold ${Number(queue) > 6 ? "text-critical" : ""}`}>{wait}</div><div className="text-[10px] text-muted-foreground">Est. wait</div></div></div></div>)}</div></div>
    <StaffingMap rush={rush} counter4={counter4}/>
  </div>;
}

function StaffingMap({ rush, counter4 }: { rush: boolean; counter4: boolean }) {
  const zones = [["Checkout", counter4 ? 5 : 4, rush ? 5 : 4], ["Fresh Food", 6, rush ? 4 : 6], ["Grocery Floor", 8, rush ? 7 : 8], ["Customer Care", 3, 3]];
  return <div className="rounded-md border border-border bg-card p-4"><SectionTitle icon={UserRoundCheck} title="Staff Allocation" note="Current deployment compared with AI recommendation"/><div className="space-y-4">{zones.map(([zone, current, rec]) => <div key={String(zone)} className="grid grid-cols-[120px_1fr_auto] items-center gap-3"><div className="text-xs font-bold">{zone}</div><div className="h-7 overflow-hidden rounded-sm bg-muted"><div className={`flex h-full items-center px-2 text-[10px] font-bold text-primary-foreground ${current === rec ? "bg-optimal" : "bg-warning"}`} style={{ width: `${(Number(current)/8)*100}%` }}>{current} staff</div></div><div className={`min-w-20 text-right text-[10px] font-bold ${current === rec ? "text-optimal" : "text-warning"}`}>AI: {rec} {current === rec ? "✓" : "→"}</div></div>)}</div></div>;
}

function Architecture() {
  const [cloud, setCloud] = useState(false);
  return <div className="space-y-5">
    <div className="rounded-md border border-border bg-card p-5"><div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="flex items-center gap-2 text-sm font-extrabold"><ShieldCheck className="size-4 text-insight"/>Privacy-First Data Flow</h2><p className="mt-1 text-xs text-muted-foreground">Toggle to inspect what leaves the store</p></div><div className="flex items-center gap-3 rounded-md bg-muted p-1"><Button size="sm" variant={!cloud ? "default" : "ghost"} onClick={() => setCloud(false)}>Local Processing</Button><Button size="sm" variant={cloud ? "default" : "ghost"} onClick={() => setCloud(true)}>Cloud Sync</Button></div></div>
      {!cloud ? <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]"><FlowNode icon={Camera} title="Camera Streams" detail="12 encrypted inputs"/><FlowArrow/><FlowNode icon={Cpu} title="On-Device NPU" detail="Detection + inference" highlight/><FlowArrow/><FlowNode icon={ShieldCheck} title="Local Alerts" detail="No PII saved" good/></div> : <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]"><FlowNode icon={Database} title="Anonymous Metrics" detail="Counts + dwell time"/><FlowArrow/><FlowNode icon={CloudOff} title="Privacy Filter" detail="Faces never transmitted" highlight/><FlowArrow/><FlowNode icon={Network} title="Secure Cloud Sync" detail="Aggregates only" good/></div>}
      <div className="mt-6 rounded-md border border-optimal/30 bg-optimal-soft p-4 text-center text-xs font-bold text-optimal"><ShieldCheck className="mr-2 inline size-4"/>Zero biometric data stored • No facial recognition • Automatic 24-hour metric retention</div>
    </div>
    <div className="grid gap-4 md:grid-cols-3"><MetricGauge value={30} max={30} suffix=" FPS" label="Frame Processing Speed" note="Per camera • Real time"/><MetricGauge value={100} max={100} suffix="%" label="Privacy Compliance" note="GDPR / DPDP compliant"/><MetricGauge value={94} max={100} suffix="%" label="Bandwidth Saved" note="vs. cloud video processing"/></div>
    <div className="grid gap-4 md:grid-cols-2"><div className="rounded-md border border-border bg-card p-5"><h3 className="text-sm font-extrabold">Edge Node Fleet</h3><div className="mt-4 space-y-3">{["ENT-01 • Entrance", "CHK-02 • Checkout", "GRO-04 • Grocery", "ELE-07 • Electronics"].map((n, i) => <div key={n} className="flex items-center gap-3 text-xs"><span className="size-2 rounded-full bg-optimal"/><span className="flex-1 font-medium">{n}</span><span className="font-mono text-muted-foreground">{28+i%3} FPS • {42+i*3}°C</span></div>)}</div></div><div className="rounded-md border border-border bg-card p-5"><h3 className="text-sm font-extrabold">Compliance Controls</h3><div className="mt-4 space-y-3">{["PII redaction at capture", "Encrypted local inference", "Anonymized metric export", "Role-based operator access"].map(n => <div key={n} className="flex items-center gap-3 text-xs"><span className="flex size-5 items-center justify-center rounded-full bg-optimal-soft text-optimal"><Check className="size-3"/></span><span>{n}</span></div>)}</div></div></div>
  </div>;
}

function FlowNode({ icon: Icon, title, detail, highlight, good }: { icon: Icon; title: string; detail: string; highlight?: boolean; good?: boolean }) { return <div className={`flex min-h-36 flex-col items-center justify-center rounded-md border p-4 text-center ${highlight ? "border-insight/40 bg-insight-soft" : good ? "border-optimal/40 bg-optimal-soft" : "border-border bg-background"}`}><Icon className={`mb-3 size-8 ${highlight ? "text-insight" : good ? "text-optimal" : "text-muted-foreground"}`}/><div className="text-sm font-extrabold">{title}</div><div className="mt-1 text-[11px] text-muted-foreground">{detail}</div></div>; }
function FlowArrow() { return <div className="flex items-center justify-center"><ArrowUpRight className="size-5 rotate-45 text-muted-foreground md:rotate-0"/></div>; }
function MetricGauge({ value, max, suffix, label, note }: { value: number; max: number; suffix: string; label: string; note: string }) { const pct = Math.round(value/max*100); return <div className="rounded-md border border-border bg-card p-5"><div className="flex items-center justify-between"><CircleGauge className="size-6 text-insight"/><span className="font-mono text-[10px] text-optimal">OPTIMAL</span></div><div className="mt-5 text-3xl font-extrabold">{value}<span className="text-base text-muted-foreground">{suffix}</span></div><div className="mt-1 text-sm font-bold">{label}</div><div className="text-[10px] text-muted-foreground">{note}</div><div className="mt-4 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-insight" style={{ width: `${pct}%` }}/></div></div>; }
const hourlyTraffic = [52,88,142,210,268,312,405,468,392,301,356,470,388,244,150,96];
// Low traffic = green, mid = amber, high = red.
function trafficColor(t: number) {
  const k = Math.min(1, Math.max(0, t));
  const hue = 145 - 145 * Math.pow(k, 0.85);
  const sat = 62 + 24 * k;
  const light = 44 - 4 * k;
  return `hsl(${hue.toFixed(0)} ${sat.toFixed(0)}% ${light.toFixed(0)}%)`;
}
const hourLabels = ["8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"];
const weekdayTraffic = [["Mon",1980],["Tue",2140],["Wed",2260],["Thu",2480],["Fri",3120],["Sat",3860],["Sun",3410]] as const;
const riskItems = [
  ["Organic Whole Milk 1L", "SKU 41987", 46, 22, 3],
  ["Sparkling Water 8pk", "SKU 51903", 18, 12, 4],
  ["Wireless Earbuds Pro", "SKU 92388", 9, 4, 5],
  ["Free Range Eggs 12pk", "SKU 38421", 120, 28, 2],
  ["Premium Ground Coffee", "SKU 84116", 96, 15, 6],
] as const;

function TrafficStaffing({ rush, activeShoppers }: { rush: boolean; activeShoppers: number }) {
  const traffic = hourlyTraffic.map(v => rush ? Math.round(v * 1.28) : v);
  const peakIndex = traffic.indexOf(Math.max(...traffic));
  const maxTraffic = Math.max(...traffic);
  const maxWeek = Math.max(...weekdayTraffic.map(([, v]) => v));
  const staffPlan = traffic.map(v => Math.max(4, Math.round(v / 42)));
  return <div className="space-y-5">
    <div className="grid gap-4 md:grid-cols-3">
      {[["Busiest hour today", `${hourLabels[peakIndex]} • ${maxTraffic} visitors`, "Peak inflow window"],
        ["Live active shoppers", `${activeShoppers}`, "Tripwire-verified count"],
        ["Recommended peak staff", `${Math.max(...staffPlan)} associates`, "AI shift allocation"]].map(([label, value, note]) =>
        <div key={label} className="rounded-md border border-border bg-card p-4"><div className="text-[10px] font-bold uppercase text-muted-foreground">{label}</div><div className="mt-2 font-display text-2xl font-bold">{value}</div><div className="text-[10px] text-muted-foreground">{note}</div></div>)}
    </div>
    <div className="rounded-md border border-border bg-card p-4">
      <SectionTitle icon={BarChart3} title="Hourly Footfall" note="Shoppers entering per hour, edge-counted"/>
      <div className="flex h-56 items-stretch gap-2">{traffic.map((v, i) => { const t = v / maxTraffic; return <div key={hourLabels[i]} className="flex h-full flex-1 flex-col items-center gap-1"><span className="font-mono text-[9px]" style={{ color: trafficColor(t) }}>{v}</span><div className="relative w-full flex-1"><div className="absolute inset-x-0 bottom-0 rounded-t-sm transition-all" style={{ height: `${Math.max(4, t * 100)}%`, backgroundColor: trafficColor(t), boxShadow: i === peakIndex ? `0 0 0 2px ${trafficColor(1)}40` : undefined }} title={`${v} shoppers`}/></div><span className="text-[9px] text-muted-foreground">{hourLabels[i]}</span></div>; })}</div>
    </div>
    <div className="grid gap-4 xl:grid-cols-2">
      <div className="rounded-md border border-border bg-card p-4">
        <SectionTitle icon={CalendarDays} title="Weekly Demand Pattern" note="Total visitors by weekday"/>
        <div className="space-y-3">{weekdayTraffic.map(([day, v]) => <div key={day} className="grid grid-cols-[46px_1fr_auto] items-center gap-3"><span className="text-xs font-bold">{day}</span><div className="h-6 overflow-hidden rounded-sm bg-muted"><div className={`h-full ${v === maxWeek ? "bg-critical" : "bg-insight"}`} style={{ width: `${(v / maxWeek) * 100}%` }}/></div><span className="font-mono text-[10px] text-muted-foreground">{v}</span></div>)}</div>
      </div>
      <div className="rounded-md border border-border bg-card p-4">
        <SectionTitle icon={UserRoundCheck} title="Predictive Staffing Heatmap" note="Associates recommended per hour"/>
        <div className="grid grid-cols-7 gap-1.5">{staffPlan.map((s, i) => { const intensity = s / Math.max(...staffPlan); const tone = intensity > 0.85 ? "bg-critical-soft text-critical border-critical/40" : intensity > 0.6 ? "bg-warning-soft text-warning border-warning/40" : "bg-optimal-soft text-optimal border-optimal/40"; return <div key={hourLabels[i]} className={`rounded-sm border p-2 text-center ${tone}`}><div className="text-[9px] font-bold">{hourLabels[i]}</div><div className="text-sm font-extrabold">{s}</div></div>; })}</div>
      </div>
    </div>
    <HighRiskInventory rush={rush}/>
  </div>;
}

function HighRiskInventory({ rush }: { rush: boolean }) {
  const rows = riskItems.map(([name, sku, stock, velocity, shipmentDays]) => {
    const dailySales = rush ? Math.round(velocity * 1.25) : velocity;
    const daysLeft = +(stock / dailySales).toFixed(1);
    const shortfall = Math.max(0, Math.round(dailySales * shipmentDays - stock));
    return { name, sku, stock, dailySales, shipmentDays, daysLeft, shortfall, atRisk: daysLeft < shipmentDays };
  }).filter(r => r.atRisk).sort((a, b) => a.daysLeft - b.daysLeft);
  return <div className="rounded-md border border-border bg-card p-4">
    <SectionTitle icon={AlertTriangle} title="High-Risk Inventory" note="Items projected to deplete before the next scheduled shipment"/>
    {rows.length === 0 ? <div className="rounded-md border border-optimal/40 bg-optimal-soft p-4 text-xs font-bold text-optimal">All monitored SKUs have enough cover until the next shipment.</div> :
    <div className="overflow-x-auto"><table className="w-full text-left text-xs"><thead><tr className="text-[10px] uppercase text-muted-foreground"><th className="py-2 pr-3">Item</th><th className="py-2 pr-3">Stock</th><th className="py-2 pr-3">Daily sales</th><th className="py-2 pr-3">Days of cover</th><th className="py-2 pr-3">Shipment in</th><th className="py-2">Projected shortfall</th></tr></thead>
      <tbody>{rows.map(r => <tr key={r.sku} className="border-t border-border"><td className="py-3 pr-3"><div className="font-bold">{r.name}</div><div className="font-mono text-[10px] text-muted-foreground">{r.sku}</div></td><td className="py-3 pr-3 font-mono">{r.stock}</td><td className="py-3 pr-3 font-mono">{r.dailySales}/day</td><td className="py-3 pr-3"><span className={`rounded-sm px-2 py-1 font-bold ${r.daysLeft < 1 ? "bg-critical-soft text-critical" : "bg-warning-soft text-warning"}`}>{r.daysLeft}d</span></td><td className="py-3 pr-3 font-mono">{r.shipmentDays}d</td><td className="py-3 font-bold text-critical">{r.shortfall} units</td></tr>)}</tbody></table></div>}
  </div>;
}
