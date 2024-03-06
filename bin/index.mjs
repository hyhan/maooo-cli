#!/usr/bin/env node
import { program } from 'commander'
import { initDeployCommand } from '../lib/deploy/index.mjs'

initDeployCommand(program)

program.parse(process.argv)
