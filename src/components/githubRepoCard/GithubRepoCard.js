import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  const open = (url) => {
    if (!url) return;
    const w = window.open(url, "_blank");
    if (w) w.focus();
  };

  const has = (v) => v && String(v).trim().length > 0;

  // preferred fields for the new UI (fallbacks kept for backward compat)
  const iconSrc =
    repo.icon ||
    repo.logo ||
    repo.image ||
    repo.imageUrl ||
    repo.cover ||
    ""; // optional

  return (
    <Fade bottom duration={1200} distance="24px">
      <div
        className="repo-card glass-card"
        style={{ backgroundColor: theme.highlight, borderColor: theme.text + "22" }}
      >
        {/* App icon */}
        {has(iconSrc) && (
          <div className="repo-icon-wrap">
            <img className="repo-icon" src={iconSrc} alt={`${repo.name} icon`} />
          </div>
        )}

        {/* Title */}
        <h3 className="repo-title" style={{ color: theme.text }}>
          {repo.name}
        </h3>

        {/* Description (multi-line clamp) */}
        <p className="repo-desc clamp-6" style={{ color: theme.text }}>
          {repo.description}
        </p>

        {/* Meta row */}
        <div className="repo-meta">
          <span className="repo-date" style={{ color: theme.secondaryText }}>
            {repo.createdAt ? `Created on ${repo.createdAt.split("T")[0]}` : ""}
          </span>
          {!!repo.languages?.length && (
            <ProjectLanguages className="repo-langs" logos={repo.languages} />
          )}
        </div>

        {/* Buttons */}
        <div className="repo-btns">
          {/* Play Store */}
          {has(repo.playstoreUrl) && (
            <button
              className="pill-btn"
              style={{ background: theme.text, color: theme.highlight }}
              onClick={() => open(repo.playstoreUrl)}
              aria-label="Open Google Play Store"
            >
              Visit Google Play Store
            </button>
          )}

          {/* App Store */}
          {has(repo.appstoreUrl) && (
            <button
              className="pill-btn"
              style={{ background: theme.text, color: theme.highlight }}
              onClick={() => open(repo.appstoreUrl)}
              aria-label="Open Apple App Store"
            >
              Visit Apple App Store
            </button>
          )}

          {/* Optional extra actions if you use them in your JSON */}
          {has(repo.screenshotsUrl) && (
            <button
              className="pill-btn subtle"
              onClick={() => open(repo.screenshotsUrl)}
              aria-label="View screenshots"
            >
              View Screenshots
            </button>
          )}
          {has(repo.detailsUrl) && (
            <button
              className="pill-btn subtle"
              onClick={() => open(repo.detailsUrl)}
              aria-label="Technical details"
            >
              Technical Details
            </button>
          )}
        </div>
      </div>
    </Fade>
  );
}