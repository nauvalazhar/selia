#!/usr/bin/env node
import { program } from 'commander';
import { addCommand } from '~/commands/add';
import { initCommand } from '~/commands/init';
import { buildCommand } from '~/commands/build';

program.version('0.0.1');

program.addCommand(initCommand);
program.addCommand(addCommand);
program.addCommand(buildCommand);

program.parse();
