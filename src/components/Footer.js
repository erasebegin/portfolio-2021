import React from 'react';
import Typography from '@material-ui/core/Typography';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import InstaIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import { GrReactjs } from 'react-icons/gr';

import useWidth from '../hooks/UseWidth';

export default function Footer() {
  const isMobile = useWidth();

  return (
    <footer>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        <a
          href="https://www.linkedin.com/in/chris-haupt/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.github.com/erasebegin"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.instagram.com/christhaupt/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <InstaIcon />
        </a>
        <MailIcon />
        <div style={{ flexDirection: isMobile ? 'column' : 'row' }}>
          <p>Created using React</p>
          <GrReactjs
            size={28}
            style={{ display: isMobile ? 'none' : 'initial' }}
          />

          <p>
            Check out the source over on{' '}
            <a
              href="https://github.com/erasebegin/portfolio-2021"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00296b' }}
            >
              Github
            </a>
          </p>
          <a
            href="https://github.com/erasebegin/portfolio-2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              style={{
                display: isMobile ? 'none' : 'initial',
                color: '#00296b'
              }}
            />
          </a>
        </div>
      </Typography>
    </footer>
  );
}
