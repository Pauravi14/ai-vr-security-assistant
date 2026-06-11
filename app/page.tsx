"use client";

import { useState } from "react";

export default function Home() {
  const [bluetoothConnected, setBluetoothConnected] = useState("yes");
  const [networkType, setNetworkType] = useState("trusted");
  const [loginTime, setLoginTime] = useState("normal");
  const [lastAuthMinutes, setLastAuthMinutes] = useState(30);

  let score = 0;
  const reasons: string[] = [];

  if (bluetoothConnected === "no") {
    score += 25;
    reasons.push("Trusted phone is disconnected.");
  }

  if (networkType === "public") {
    score += 25;
    reasons.push("Public Wi-Fi increases security risk.");
  }

  if (networkType === "unknown") {
    score += 30;
    reasons.push("Unknown network cannot be trusted.");
  }

  if (loginTime === "unusual") {
    score += 15;
    reasons.push("Login time is unusual.");
  }

  if (loginTime === "late-night") {
    score += 25;
    reasons.push("Late-night login may be suspicious.");
  }

  if (lastAuthMinutes > 60) {
    score += 15;
    reasons.push("Last authentication was more than one hour ago.");
  }

  if (lastAuthMinutes > 180) {
    score += 15;
    reasons.push("Last authentication is very old.");
  }

  if (score > 100) {
    score = 100;
  }

  let level = "Low";
  let action = "Continue the VR session.";

  if (score > 30 && score <= 60) {
    level = "Medium";
    action = "Ask for lightweight re-authentication.";
  } else if (score > 60 && score <= 80) {
    level = "High";
    action = "Ask for stronger re-authentication.";
  } else if (score > 80) {
    level = "Critical";
    action = "Lock the VR session.";
  }

  if (reasons.length === 0) {
    reasons.push("No suspicious signal detected.");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          VR Security Project
        </p>

        <h1 className="mb-4 text-4xl font-bold">
          AI-Powered VR Security Assistant
        </h1>

        <p className="mb-10 max-w-3xl text-slate-300">
          This demo analyzes VR session context signals and recommends adaptive
          authentication actions based on calculated risk.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-6 text-2xl font-semibold">Session Inputs</h2>

            <label className="mb-2 block text-sm text-slate-300">
              Trusted phone connected by Bluetooth?
            </label>
            <select
              value={bluetoothConnected}
              onChange={(e) => setBluetoothConnected(e.target.value)}
              className="mb-5 w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
            >
              <option value="yes">Yes, connected</option>
              <option value="no">No, disconnected</option>
            </select>

            <label className="mb-2 block text-sm text-slate-300">
              Network type
            </label>
            <select
              value={networkType}
              onChange={(e) => setNetworkType(e.target.value)}
              className="mb-5 w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
            >
              <option value="trusted">Trusted home Wi-Fi</option>
              <option value="public">Public Wi-Fi</option>
              <option value="unknown">Unknown network</option>
            </select>

            <label className="mb-2 block text-sm text-slate-300">
              Login time behavior
            </label>
            <select
              value={loginTime}
              onChange={(e) => setLoginTime(e.target.value)}
              className="mb-5 w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
            >
              <option value="normal">Normal time</option>
              <option value="unusual">Unusual time</option>
              <option value="late-night">Late-night login</option>
            </select>

            <label className="mb-2 block text-sm text-slate-300">
              Time since last authentication: {lastAuthMinutes} minutes
            </label>
            <input
              type="range"
              min="0"
              max="300"
              value={lastAuthMinutes}
              onChange={(e) => setLastAuthMinutes(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="rounded-2xl border border-cyan-900 bg-cyan-950/40 p-6">
            <h2 className="mb-6 text-2xl font-semibold">Assistant Output</h2>

            <p className="text-lg text-slate-300">Risk Score</p>
            <p className="mb-6 text-6xl font-bold text-cyan-300">
              {score}/100
            </p>

            <p className="mb-2 text-lg text-slate-300">Risk Level</p>
            <p className="mb-6 text-3xl font-bold">{level}</p>

            <p className="mb-2 text-lg text-slate-300">Recommended Action</p>
            <p className="mb-6 rounded-lg bg-slate-900 p-4">{action}</p>

            <p className="mb-2 text-lg text-slate-300">Explanation</p>
            <ul className="space-y-2">
              {reasons.map((reason, index) => (
                <li key={index} className="rounded-lg bg-slate-900 p-3">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-semibold">About This Project</h2>

          <p className="text-slate-300">
            This is an independent portfolio demo inspired by adaptive
            authentication concepts in VR security. It does not contain private
            university project code.
          </p>
        </section>
      </section>
    </main>
  );
}