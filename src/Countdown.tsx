import { useState, useEffect, useRef } from "react";
import backgroundVideo from "/party.mp4";

export interface PremiumCountdownProps {
  targetDate?: string;
  targetTime?: string;
  eventTitle?: string;
  eventDescription?: string;
  eventLocation?: string;
  calendarEventName?: string;
  layout?: "horizontal" | "vertical" | "grid";
  gridColumns?: number;
  cardSize?: number;
  cardGap?: number;
  cardBorderRadius?: number;
  showDays?: boolean;
  showHours?: boolean;
  showMinutes?: boolean;
  showSeconds?: boolean;
  labelDays?: string;
  labelHours?: string;
  labelMinutes?: string;
  labelSeconds?: string;
  showLabels?: boolean;
  labelPosition?: "top" | "bottom";
  showBackground?: boolean;
  backgroundColor?: string;
  backgroundGradient?: boolean;
  gradientColor1?: string;
  gradientColor2?: string;
  gradientColor3?: string;
  gradientAngle?: number;
  showOrbs?: boolean;
  orb1Color?: string;
  orb2Color?: string;
  orb3Color?: string;
  orbAnimationDuration?: number;
  cardBackground?: string;
  cardBorderColor?: string;
  cardBorderWidth?: number;
  cardBlur?: boolean;
  cardBlurAmount?: number;
  cardShadow?: boolean;
  cardShadowColor?: string;
  cardShadowBlur?: number;
  cardShadowY?: number;
  showCardShine?: boolean;
  cardShineOpacity?: number;
  numberColor?: string;
  numberFont?: React.CSSProperties;
  labelColor?: string;
  labelFont?: React.CSSProperties;
  labelGap?: number;
  showProgressBar?: boolean;
  progressBarHeight?: number;
  progressBarBorderRadius?: number;
  progressBarBackground?: string;
  progressBarFillColor?: string;
  progressBarFillGradient?: boolean;
  progressBarGradientStart?: string;
  progressBarGradientMiddle?: string;
  progressBarGradientEnd?: string;
  progressBarGlow?: boolean;
  progressBarGlowColor?: string;
  progressLabelText?: string;
  progressLabelColor?: string;
  progressLabelFont?: React.CSSProperties;
  progressValueColor?: string;
  progressValueFont?: React.CSSProperties;
  showProgressLabels?: boolean;
  progressTotalDays?: number;
  gapCardsToProgress?: number;
  gapProgressToButtons?: number;
  gapButtonsToDate?: number;
  showMilestone?: boolean;
  milestoneBgColor?: string;
  milestoneBorderColor?: string;
  milestoneTextColor?: string;
  showButtons?: boolean;
  showNotifyButton?: boolean;
  showCalendarButton?: boolean;
  showShareButton?: boolean;
  buttonBackground?: string;
  buttonHoverBackground?: string;
  buttonBorderColor?: string;
  buttonTextColor?: string;
  buttonBorderRadius?: number;
  buttonPaddingX?: number;
  buttonPaddingY?: number;
  buttonFont?: React.CSSProperties;
  buttonBlur?: boolean;
  subscribeButtonGradient?: string;
  subscribedBgColor?: string;
  subscribedBorderColor?: string;
  subscribedTextColor?: string;
  dropdownBackground?: string;
  dropdownBorderColor?: string;
  dropdownBorderRadius?: number;
  dropdownItemHoverBg?: string;
  showShareTwitter?: boolean;
  showShareFacebook?: boolean;
  showShareLinkedIn?: boolean;
  showShareWhatsApp?: boolean;
  showShareCopyLink?: boolean;
  showDateDisplay?: boolean;
  dateDisplayColor?: string;
  dateDisplayFont?: React.CSSProperties;
  emailIntegrationMethod?:
    | "localStorage"
    | "mailchimp"
    | "googleSheets"
    | "webhook";
  mailchimpFormAction?: string;
  mailchimpU?: string;
  mailchimpId?: string;
  googleSheetsUrl?: string;
  webhookUrl?: string;
  webhookAuthToken?: string;
  enableAnimations?: boolean;
}

export default function PremiumCountdown(props: PremiumCountdownProps) {
  const {
    targetDate = "2026-09-19",
    targetTime = "10:00",
    eventTitle = "Days Remaining Until The Party!",
    eventDescription = "Let's Celebrate!",
    eventLocation = "Online",
    calendarEventName = "Party Day",
    layout = "horizontal",
    gridColumns = 2,
    cardSize = 130,
    cardGap = 16,
    cardBorderRadius = 24,
    showDays = true,
    showHours = true,
    showMinutes = true,
    showSeconds = true,
    labelDays = "Days",
    labelHours = "Hours",
    labelMinutes = "Minutes",
    labelSeconds = "Seconds",
    showLabels = true,
    labelPosition = "bottom",
    showBackground = true,
    backgroundColor = "#000000",
    backgroundGradient = false,
    gradientColor1 = "#000000",
    gradientColor2 = "#000000",
    gradientColor3 = "#000000",
    gradientAngle = 135,
    showOrbs = false,
    orb1Color = "rgba(99,102,241,0.15)",
    orb2Color = "rgba(236,72,153,0.12)",
    orb3Color = "rgba(34,211,238,0.1)",
    orbAnimationDuration = 8,
    cardBackground = "#121214",
    cardBorderColor = "rgba(255,255,255,0.05)",
    cardBorderWidth = 1,
    cardBlur = false,
    cardBlurAmount = 0,
    cardShadow = false,
    cardShadowColor = "rgba(0,0,0,0.5)",
    cardShadowBlur = 32,
    cardShadowY = 8,
    showCardShine = false,
    cardShineOpacity = 0.12,
    numberColor = "#ffffff",
    numberFont = {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "-0.02em",
    },
    labelColor = "rgba(255,255,255,0.45)",
    labelFont = {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
    labelGap = 14,
    showProgressBar = true,
    progressBarHeight = 10,
    progressBarBorderRadius = 100,
    progressBarBackground = "#1a1a1e",
    progressBarFillColor = "#ffffff",
    progressBarFillGradient = false,
    progressBarGradientStart = "#ffffff",
    progressBarGradientMiddle = "#ffffff",
    progressBarGradientEnd = "#ffffff",
    progressBarGlow = false,
    progressBarGlowColor = "rgba(255,255,255,0.2)",
    progressLabelText = "PROGRESS",
    progressLabelColor = "rgba(255,255,255,0.45)",
    progressLabelFont = {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.1em",
    },
    progressValueColor = "#ffffff",
    progressValueFont = {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      fontSize: 13,
      fontWeight: 700,
    },
    showProgressLabels = true,
    progressTotalDays = 365,
    gapCardsToProgress = 32,
    gapProgressToButtons = 36,
    gapButtonsToDate = 24,
    showMilestone = false,
    milestoneBgColor = "rgba(245,158,11,0.15)",
    milestoneBorderColor = "rgba(245,158,11,0.3)",
    milestoneTextColor = "#fbbf24",
    showButtons = true,
    showNotifyButton = true,
    showCalendarButton = true,
    showShareButton = true,
    buttonBackground = "#121214",
    buttonHoverBackground = "#1d1d21",
    buttonBorderColor = "rgba(255,255,255,0.08)",
    buttonTextColor = "#ffffff",
    buttonBorderRadius = 14,
    buttonPaddingX = 22,
    buttonPaddingY = 12,
    buttonFont = {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      fontSize: 14,
      fontWeight: 500,
    },
    buttonBlur = false,
    subscribeButtonGradient = "linear-gradient(135deg,#ffffff,#e2e8f0)",
    subscribedBgColor = "rgba(34,197,94,0.15)",
    subscribedBorderColor = "rgba(34,197,94,0.3)",
    subscribedTextColor = "#22c55e",
    dropdownBackground = "#121214",
    dropdownBorderColor = "rgba(255,255,255,0.1)",
    dropdownBorderRadius = 12,
    dropdownItemHoverBg = "rgba(255,255,255,0.08)",
    showShareTwitter = true,
    showShareFacebook = true,
    showShareLinkedIn = true,
    showShareWhatsApp = true,
    showShareCopyLink = true,
    showDateDisplay = true,
    dateDisplayColor = "rgba(255,255,255,0.35)",
    dateDisplayFont = {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      fontSize: 14,
      fontWeight: 400,
    },
    emailIntegrationMethod = "localStorage",
    mailchimpFormAction = "",
    mailchimpU = "",
    mailchimpId = "",
    googleSheetsUrl = "",
    webhookUrl = "",
    webhookAuthToken = "",
    enableAnimations = true,
  } = props;

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const calendarRef = useRef<HTMLDivElement>(null);
  const shareRef = useRef<HTMLDivElement>(null);

  const fullTargetDate = new Date(`${targetDate}T${targetTime}:00`);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setShowCalendarMenu(false);
      }
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const updateTimer = () => {
      const diff = fullTargetDate.getTime() - Date.now();
      if (diff > 0) {
        setTime({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      } else {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate, targetTime]);

  const units = [];
  if (showDays) units.push({ value: time.days, label: labelDays });
  if (showHours) units.push({ value: time.hours, label: labelHours });
  if (showMinutes) units.push({ value: time.minutes, label: labelMinutes });
  if (showSeconds) units.push({ value: time.seconds, label: labelSeconds });

  const totalSec =
    time.days * 86400 + time.hours * 3600 + time.minutes * 60 + time.seconds;
  const progress = Math.max(
    0,
    Math.min(
      100,
      ((progressTotalDays * 86400 - totalSec) / (progressTotalDays * 86400)) *
        100,
    ),
  );

  const getMilestone = () => {
    if (time.days === 0 && time.hours === 0 && time.minutes < 60)
      return "🔥 Final Hour!";
    if (time.days === 0 && time.hours < 24) return "⚡ Last 24 Hours!";
    if (time.days < 7) return "📅 Final Week!";
    if (time.days < 30) return "🗓️ Less than a month!";
    return null;
  };

  const format = (n: number) => String(n).padStart(2, "0");
  const formatDate = () =>
    fullTargetDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });

  const handleNotify = async () => {
    if (!showEmailInput) {
      setShowEmailInput(true);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      if (emailIntegrationMethod === "mailchimp") {
        await fetch(
          `${mailchimpFormAction}?u=${mailchimpU}&id=${mailchimpId}&EMAIL=${encodeURIComponent(email)}`,
          { method: "POST", mode: "no-cors" },
        );
      } else if (emailIntegrationMethod === "googleSheets") {
        await fetch(googleSheetsUrl, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({ email }),
        });
      } else if (emailIntegrationMethod === "webhook") {
        await fetch(webhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: webhookAuthToken
            ? { Authorization: `Bearer ${webhookAuthToken}` }
            : {},
          body: JSON.stringify({ email, event: eventTitle }),
        });
      } else {
        const s = JSON.parse(localStorage.getItem("countdown_subs") || "[]");
        if (!s.includes(email)) {
          localStorage.setItem("countdown_subs", JSON.stringify([...s, email]));
        }
      }
      setIsSubscribed(true);
      setShowEmailInput(false);
      setEmail("");
    } catch {
      setIsSubscribed(true);
      setShowEmailInput(false);
    }
    setIsLoading(false);
  };

  const addGoogle = () => {
    const start = fullTargetDate.toISOString().replace(/-|:|\.\d+/g, "");
    const end = new Date(fullTargetDate.getTime() + 7200000)
      .toISOString()
      .replace(/-|:|\.\d+/g, "");
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarEventName)}&dates=${start}/${end}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`,
      "_blank",
    );
    setShowCalendarMenu(false);
  };

  const addApple = () => {
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${fullTargetDate.toISOString().replace(/-|:|\.\d+Z/g, "")}Z\nSUMMARY:${calendarEventName}\nDESCRIPTION:${eventDescription}\nLOCATION:${eventLocation}\nEND:VEVENT\nEND:VCALENDAR`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = "event.ics";
    a.click();
    setShowCalendarMenu(false);
  };

  const addOutlook = () => {
    window.open(
      `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(calendarEventName)}&body=${encodeURIComponent(eventDescription)}&startdt=${fullTargetDate.toISOString()}&location=${encodeURIComponent(eventLocation)}`,
      "_blank",
    );
    setShowCalendarMenu(false);
  };

  const url = typeof window !== "undefined" ? window.location.href : "";
  const txt = `${eventTitle} - ${time.days} days left!`;

  const shareX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(txt)}&url=${encodeURIComponent(url)}`,
      "_blank",
    );
    setShowShareMenu(false);
  };

  const shareFB = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
    );
    setShowShareMenu(false);
  };

  const shareLI = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
    );
    setShowShareMenu(false);
  };

  const shareWA = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(txt + " " + url)}`,
      "_blank",
    );
    setShowShareMenu(false);
  };

  const copyL = () => {
    navigator.clipboard.writeText(url);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1500);
  };

  const milestone = getMilestone();

  const getProgressFill = () =>
    progressBarFillGradient
      ? `linear-gradient(90deg,${progressBarGradientStart} 0%,${progressBarGradientMiddle} 50%,${progressBarGradientEnd} 100%)`
      : progressBarFillColor;

  const btnStyle = (id: string): React.CSSProperties => ({
    padding: `${buttonPaddingY}px ${buttonPaddingX}px`,
    background: hovered === id ? buttonHoverBackground : buttonBackground,
    backdropFilter: buttonBlur ? "blur(20px)" : "none",
    WebkitBackdropFilter: buttonBlur ? "blur(20px)" : "none",
    border: `1px solid ${buttonBorderColor}`,
    borderRadius: buttonBorderRadius,
    color: buttonTextColor,
    ...buttonFont,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "all 0.2s ease",
    transform: hovered === id ? "translateY(-1px)" : "none",
  });

  const ddStyle = (id: string): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
    width: "100%",
    padding: "12px 14px",
    background: hovered === id ? dropdownItemHoverBg : "transparent",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    textAlign: "left",
    transition: "background 0.15s",
  });

  const Icons = {
    Google: () => (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
    Apple: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    Outlook: () => (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path
          fill="#0078D4"
          d="M24 7.4v10.5c0 .2-.1.4-.2.6-.2.1-.4.2-.6.2h-8.5V11.7l1.6 1.2c.1.1.2.1.4.1.1 0 .3 0 .4-.1l6.8-5.2c.1-.1.2-.2.2-.2 0-.1.1-.2.1-.3 0-.1 0-.2-.1-.3-.1-.1-.2-.1-.3-.2H24v.7z"
        />
        <path fill="#0078D4" d="M7.5 5.5v13l-7-2v-9l7-2z" />
        <path
          fill="#0078D4"
          d="M14.6 6.1v12h-5.1c-.2 0-.4-.1-.6-.2-.1-.2-.2-.3-.2-.6V6.1h5.9z"
        />
      </svg>
    ),
    X: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    FB: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.3l-.5 3.5H13.9v8.4C19.6 23 24 18 24 12z" />
      </svg>
    ),
    LI: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2 2.1-2s2.1.9 2.1 2c0 1.2-.9 2.1-2.1 2.1zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.5c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z" />
      </svg>
    ),
    WA: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.5 14.4c-.3-.1-1.8-.9-2-.1s-.5.2-.7.1c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3m-5.4 7.4a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 01-1.5-5.3c0-5.5 4.4-9.9 9.9-9.9 2.6 0 5.1 1 7 2.9a9.8 9.8 0 012.9 7c0 5.4-4.4 9.9-9.9 9.9m8.4-18.3A11.8 11.8 0 0012 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a11.9 11.9 0 005.7 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.1-3.5-8.4z" />
      </svg>
    ),
    Link: () => (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
      >
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
      </svg>
    ),
    Check: () => (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  };

  const hasShareOptions =
    showShareTwitter ||
    showShareFacebook ||
    showShareLinkedIn ||
    showShareWhatsApp ||
    showShareCopyLink;

  return (
    <div
      className="content"
      style={{
        position: "relative",
        zIndex: 2, // was 1 — now above .video-background (0) and .video-overlay (1)
        width: "100%",
        minHeight: "100vh",
        background: showBackground
          ? backgroundGradient
            ? `linear-gradient(${gradientAngle}deg,${gradientColor1},${gradientColor2},${gradientColor3})`
            : backgroundColor
          : "transparent",
        display: "flex",

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "24px 16px",
        boxSizing: "border-box",
      }}
    >
      <div className="video-background">
        <video autoPlay loop muted playsInline id="bg-video">
          <source src={backgroundVideo} type="video/mp4" />
          <source src="your-video.webm" type="video/webm" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay"></div>
      </div>
      {showOrbs && enableAnimations && (
        <>
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
              padding: "12px 24px",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 16,
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              zIndex: 3,
            }}
          >
            <h1
              style={{
                margin: 0,
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                fontSize: 22,
                fontWeight: 600,
                color: "#ffffff",
                textShadow: "0 1px 8px rgba(0,0,0,0.3)",
              }}
            >
              Days remaining until the party
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              width: 400,
              height: 400,
              background: `radial-gradient(circle,${orb1Color} 0%,transparent 70%)`,
              borderRadius: "50%",
              filter: "blur(60px)",
              animation: `float ${orbAnimationDuration}s ease-in-out infinite`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "10%",
              width: 350,
              height: 350,
              background: `radial-gradient(circle,${orb2Color} 0%,transparent 70%)`,
              borderRadius: "50%",
              filter: "blur(50px)",
              animation: `float ${orbAnimationDuration + 2}s ease-in-out infinite reverse`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              width: 300,
              height: 300,
              background: `radial-gradient(circle,${orb3Color} 0%,transparent 70%)`,
              borderRadius: "50%",
              filter: "blur(40px)",
              animation: `float ${orbAnimationDuration + 4}s ease-in-out infinite`,
              pointerEvents: "none",
            }}
          />
        </>
      )}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 620,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {showMilestone && milestone && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 20,
              width: "100%",
            }}
          >
            <div
              style={{
                padding: "8px 20px",
                background: milestoneBgColor,
                backdropFilter: "blur(10px)",
                borderRadius: 100,
                border: `1px solid ${milestoneBorderColor}`,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: milestoneTextColor,
                }}
              >
                {milestone}
              </span>
            </div>
          </div>
        )}

        {/* Countdown Cards Wrapper */}
        <div
          className="countdown-cards-container"
          style={{
            display: layout === "grid" ? "grid" : "flex",
            flexDirection: layout === "vertical" ? "column" : "row",
            gridTemplateColumns:
              layout === "grid"
                ? `repeat(${Math.max(1, Math.floor(gridColumns))}, minmax(60px, ${cardSize}px))`
                : undefined,
            justifyContent: "center",
            alignItems: "center",
            gap: cardGap,
            width: "100%",
            marginBottom:
              showProgressBar || showButtons ? gapCardsToProgress : 0,
          }}
        >
          {units.map((u) => (
            <div
              key={u.label}
              style={{
                display: "flex",
                flexDirection:
                  labelPosition === "top" ? "column-reverse" : "column",
                alignItems: "center",
                gap: labelGap,
                flex: "1 1 0px",
                maxWidth: cardSize,
                minWidth: 60,
              }}
            >
              <div
                className="countdown-card"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1/1",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: cardBackground,
                    backdropFilter: cardBlur
                      ? `blur(${cardBlurAmount}px)`
                      : "none",
                    WebkitBackdropFilter: cardBlur
                      ? `blur(${cardBlurAmount}px)`
                      : "none",
                    borderRadius: cardBorderRadius,
                    border: `${cardBorderWidth}px solid ${cardBorderColor}`,
                    boxShadow: cardShadow
                      ? `0 ${cardShadowY}px ${cardShadowBlur}px ${cardShadowColor}`
                      : "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  <span
                    className="countdown-number"
                    style={{
                      color: numberColor,
                      fontVariantNumeric: "tabular-nums",
                      ...numberFont,
                    }}
                  >
                    {format(u.value)}
                  </span>
                </div>
                {showCardShine && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "45%",
                      background: `linear-gradient(180deg,rgba(255,255,255,${cardShineOpacity}) 0%,transparent 100%)`,
                      borderRadius: `${cardBorderRadius}px ${cardBorderRadius}px 0 0`,
                      pointerEvents: "none",
                      zIndex: 3,
                    }}
                  />
                )}
              </div>
              {showLabels && (
                <span
                  style={{
                    color: labelColor,
                    ...labelFont,
                  }}
                >
                  {u.label}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar Container */}
        {showProgressBar && (
          <div
            style={{
              width: "100%",
              marginBottom: showButtons ? gapProgressToButtons : 0,
            }}
          >
            {showProgressLabels && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    color: progressLabelColor,
                    textTransform: "uppercase",
                    ...progressLabelFont,
                  }}
                >
                  {progressLabelText}
                </span>
                <span
                  style={{
                    color: progressValueColor,
                    ...progressValueFont,
                  }}
                >
                  {progress.toFixed(1)}%
                </span>
              </div>
            )}
            <div
              style={{
                height: progressBarHeight,
                background: progressBarBackground,
                borderRadius: progressBarBorderRadius,
                overflow: "hidden",
                width: "100%",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: getProgressFill(),
                  borderRadius: progressBarBorderRadius,
                  boxShadow: progressBarGlow
                    ? `0 0 20px ${progressBarGlowColor}`
                    : "none",
                  transition: "width 0.5s ease",
                }}
              />
            </div>
          </div>
        )}

        {/* Action Buttons Container */}
        {showButtons && (
          <div
            className="countdown-buttons-container"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: showDateDisplay ? gapButtonsToDate : 0,
              width: "100%",
            }}
          >
            {showNotifyButton && (
              <div className="button-wrapper">
                {isSubscribed ? (
                  <div
                    style={{
                      ...btnStyle("sub"),
                      background: subscribedBgColor,
                      border: `1px solid ${subscribedBorderColor}`,
                      color: subscribedTextColor,
                      width: "100%",
                    }}
                  >
                    <Icons.Check /> Subscribed!
                  </div>
                ) : showEmailInput ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      width: "100%",
                    }}
                  >
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                        style={{
                          padding: "12px 16px",
                          background: buttonBackground,
                          backdropFilter: buttonBlur ? "blur(20px)" : "none",
                          border: `1px solid ${error ? "#ef4444" : buttonBorderColor}`,
                          borderRadius: buttonBorderRadius,
                          color: "#fff",
                          fontSize: 13,
                          outline: "none",
                          flex: "1 1 180px",
                          boxSizing: "border-box",
                        }}
                      />
                      <button
                        onClick={handleNotify}
                        onMouseEnter={() => setHovered("sub")}
                        onMouseLeave={() => setHovered(null)}
                        disabled={isLoading}
                        style={{
                          ...btnStyle("sub"),
                          background: subscribeButtonGradient,
                          color: "#000000",
                          border: "none",
                          fontWeight: 600,
                          opacity: isLoading ? 0.7 : 1,
                          flex: "1 1 auto",
                        }}
                      >
                        {isLoading ? "..." : "Subscribe"}
                      </button>
                    </div>
                    {error && (
                      <span
                        style={{
                          fontSize: 12,
                          color: "#ef4444",
                        }}
                      >
                        {error}
                      </span>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={handleNotify}
                    onMouseEnter={() => setHovered("notify")}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      ...btnStyle("notify"),
                      width: "100%",
                      display: "none",
                    }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    Notify Me
                  </button>
                )}
              </div>
            )}

            {showCalendarButton && (
              <div
                ref={calendarRef}
                className="button-wrapper"
                style={{ position: "relative" }}
              >
                <button
                  onClick={() => {
                    setShowCalendarMenu(!showCalendarMenu);
                    setShowShareMenu(false);
                  }}
                  onMouseEnter={() => setHovered("cal")}
                  onMouseLeave={() => setHovered(null)}
                  style={{ ...btnStyle("cal"), width: "100%" }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Add to Calendar
                </button>
                {showCalendarMenu && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: dropdownBackground,
                      backdropFilter: "blur(20px)",
                      border: `1px solid ${dropdownBorderColor}`,
                      borderRadius: dropdownBorderRadius,
                      padding: 6,
                      minWidth: 200,
                      zIndex: 100,
                      boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
                    }}
                  >
                    <button
                      onClick={addGoogle}
                      onMouseEnter={() => setHovered("g")}
                      onMouseLeave={() => setHovered(null)}
                      style={ddStyle("g")}
                    >
                      <Icons.Google /> Google Calendar
                    </button>
                    <button
                      onClick={addApple}
                      onMouseEnter={() => setHovered("a")}
                      onMouseLeave={() => setHovered(null)}
                      style={ddStyle("a")}
                    >
                      <Icons.Apple /> Apple Calendar
                    </button>
                    <button
                      onClick={addOutlook}
                      onMouseEnter={() => setHovered("o")}
                      onMouseLeave={() => setHovered(null)}
                      style={ddStyle("o")}
                    >
                      <Icons.Outlook /> Outlook
                    </button>
                  </div>
                )}
              </div>
            )}

            {showShareButton && hasShareOptions && (
              <div
                ref={shareRef}
                className="button-wrapper"
                style={{ position: "relative" }}
              >
                <button
                  onClick={() => {
                    setShowShareMenu(!showShareMenu);
                    setShowCalendarMenu(false);
                  }}
                  onMouseEnter={() => setHovered("share")}
                  onMouseLeave={() => setHovered(null)}
                  style={{ ...btnStyle("share"), width: "100%" }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                  Share
                </button>
                {showShareMenu && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: dropdownBackground,
                      backdropFilter: "blur(20px)",
                      border: `1px solid ${dropdownBorderColor}`,
                      borderRadius: dropdownBorderRadius,
                      padding: 6,
                      minWidth: 180,
                      zIndex: 100,
                      boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
                    }}
                  >
                    {showShareTwitter && (
                      <button
                        onClick={shareX}
                        onMouseEnter={() => setHovered("x")}
                        onMouseLeave={() => setHovered(null)}
                        style={ddStyle("x")}
                      >
                        <Icons.X /> Twitter / X
                      </button>
                    )}
                    {showShareFacebook && (
                      <button
                        onClick={shareFB}
                        onMouseEnter={() => setHovered("fb")}
                        onMouseLeave={() => setHovered(null)}
                        style={ddStyle("fb")}
                      >
                        <Icons.FB /> Facebook
                      </button>
                    )}
                    {showShareLinkedIn && (
                      <button
                        onClick={shareLI}
                        onMouseEnter={() => setHovered("li")}
                        onMouseLeave={() => setHovered(null)}
                        style={ddStyle("li")}
                      >
                        <Icons.LI /> LinkedIn
                      </button>
                    )}
                    {showShareWhatsApp && (
                      <button
                        onClick={shareWA}
                        onMouseEnter={() => setHovered("wa")}
                        onMouseLeave={() => setHovered(null)}
                        style={ddStyle("wa")}
                      >
                        <Icons.WA /> WhatsApp
                      </button>
                    )}
                    {showShareCopyLink && (
                      <button
                        onClick={copyL}
                        onMouseEnter={() => setHovered("cp")}
                        onMouseLeave={() => setHovered(null)}
                        style={ddStyle("cp")}
                      >
                        {copySuccess ? <Icons.Check /> : <Icons.Link />}{" "}
                        {copySuccess ? "Copied!" : "Copy Link"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Target Date Display */}
        {showDateDisplay && (
          <p
            style={{
              textAlign: "center",
              color: dateDisplayColor,
              margin: 0,
              ...dateDisplayFont,
              width: "100%",
            }}
          >
            {formatDate()}
          </p>
        )}
      </div>

      {/* Responsive Media Queries */}
      <style>{`
                

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }

                .button-wrapper {
                    flex: 0 0 auto;
                }

                @media (max-width: 600px) {
                    .countdown-cards-container {
                        gap: 10px !important;
                    }
                    .countdown-number {
                        font-size: 32px !important;
                    }
                    .countdown-buttons-container {
                        gap: 8px !important;
                    }
                    .button-wrapper {
                        flex: 1 1 100% !important;
                    }
                }

                @media (max-width: 400px) {
                    .countdown-number {
                        font-size: 24px !important;
                    }
                }
            `}</style>
    </div>
  );
}
