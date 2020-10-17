import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedin, FaGitlab } from "react-icons/fa"
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../data/siteConfig'

const Link = styled(({ className, icon: Icon, color, ...props }) => (
  <a 
    className={className}
    target='_blank'
    rel="noopener noreferrer"
    {...props}
  >
    <Icon color={color} size={32} />
  </a>
)).attrs(props => ({ color: props.theme.colors.secondary }))`
  & + & {
    margin-left: 24px;
  }
`;

const Footer = ({ className }) => {
  const {
    twitter,
    linkedin,
    github,
    gitlab,
  } = siteConfig.social
  return (
    <footer className={className}>
      {`Last Updated: ${siteConfig.lastUpdated}`}
      <div>Design: Gatsby Starter CV by Santos Francisco</div>
      <div>
        {gitlab && <Link href={gitlab} icon={FaGitlab} />}
        {github && <Link href={github} icon={FaGithub} />}
        {twitter && <Link href={twitter} icon={FaTwitter} />}
        {linkedin && <Link href={linkedin} icon={FaLinkedin} />}
      </div>
    </footer>
  )
}

export default styled(Footer)`
  min-height: 93px; 
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: calc(960px + 48px);
  margin: 0 auto;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};

  ${props => config(props).media.sm`
    flex-direction: row;
  `}
`;