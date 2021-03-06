import React from 'react';
import cx from 'classnames';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import SideNav from './SideNav';
import FooterNav from './FooterNav';

export default function LayoutCN({
  oreo,
  i18n,
  children,
  version,
  sideNavData,
  sideNavRef,
  footerData,
  spiderOn,
  saveFooter,
  spiderReady,
  saveSpiderNode,
  onGithubSpiderMouseEnter
}) {
  return (
    <div className="doc__layout">
      <PageHeader version={version} i18n={i18n} />
      <div className="main-content">
        <div className="page-container">
          <SideNav data={sideNavData} base={oreo} ref={sideNavRef} />
          <div className="page-content">
            <div className="react-doc-page-content">
              <a
                href="https://github.com/youzan/zent"
                target="_blank"
                rel="noopener noreferrer"
                ref={saveSpiderNode}
              >
                <div
                  className="github-spider-trigger"
                  onMouseEnter={onGithubSpiderMouseEnter}
                />
                {spiderReady && (
                  <img
                    className={cx('github-spider animated', {
                      slideInDown: spiderOn,
                      slideOutUp: !spiderOn
                    })}
                    src="https://img.yzcdn.cn/zanui/react/spidertocat.png"
                    alt="github-spider"
                  />
                )}
              </a>
              {children}
            </div>
            <FooterNav data={footerData} />
          </div>
        </div>
      </div>
      <PageFooter ref={saveFooter} i18n={i18n} />
    </div>
  );
}
