import { useState } from "react";

export function TwitterCard({
  children,
  formatUsername,
  username,
}) {
  const [isFollowing, setIsFollowing] = useState(false)
  const handleClick = () => setIsFollowing(!isFollowing)

  const textButton = isFollowing ? "Siguiendo" : "Seguir";
  const classNameButton = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/github/${username}`}
          alt="El avatar de thebigyovadiaz"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUsername(username)}
          </span>
        </div>
      </header>

      <aside>
        <button
          className={classNameButton}
          onClick={handleClick}
        >
          {textButton}
        </button>
      </aside>
    </article>
  );
}
