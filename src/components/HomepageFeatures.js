import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Environment Setup',
    Svg: require('../../static/img/icon_installer.jpg').default,
    description: (
      <>
        Configure the development environment and tighten your seatbelt.
      </>
    ),
    linkTitle: (
      <>
        Setup Instructions
      </>
    ),
    linkDestination: '/docs/prerequisites',    
  },
  {
    title: 'API Reference',
    Svg: require('../../static/img/api_icon.jpg').default,
    description: (
      <>
        Refer to the documentation for deeper exploration of features.
      </>
    ),
    linkTitle: (
      <>
        Reference Docs
      </>
    ),
    linkDestination: '/docs/session',         
  },
  {
    title: 'Working Examples',
    Svg: require('../../static/img/icon_learning.jpg').default,
    description: (
      <>
        Nitro boost your journey with these pre-built examples.
      </>
    ),
    linkTitle: (
      <>
        Examples
      </>
    ),    
    linkDestination: '/docs/wallet_example',
  },
];

function Feature({Svg, title, description, linkTitle, linkDestination}) {
  return (
    <div className={clsx('col col--4 card')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} alt={title} />
      </div>
      <div className="container text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link className="button button-homepagefeatures button--primary button--lg" to={linkDestination}>
        {linkTitle}
      </Link>      
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>Choose your path for getting started with NKN Java SDK</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
