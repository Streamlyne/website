__author__ = 'dawson'

import jinja2

import os
import shutil

def copyDir(src_dir, dest_dir):
    '''
    '''
    src_files = os.listdir(src_dir)
    for file_name in src_files:
        full_file_name = os.path.join(src_dir, file_name)
        if (os.path.isfile(full_file_name)):
            shutil.copy(full_file_name, dest_dir)

def compileCSS():
    '''

    '''
    print 'Compiling CSS ...'
    copyDir('css/','site/css/')
    print 'Done compiling CSS.'

def compileJS():
    '''

    '''
    print 'Compiling JS ...'
    copyDir('js/', 'site/js/')
    print 'Done compiling JS.'

def compileHTML():
    '''

    '''
    print 'Compiling HTML ...'

    templateLoader = jinja2.FileSystemLoader(searchpath="templates/")
    templateEnv = jinja2.Environment(loader=templateLoader)

    rawFiles = [
        'index.html',
        'management.html',
        'operator.html',
        'team.html',
        'contact.html'
    ]

    for file in rawFiles:
        print '\tTemplating : ' + file
        template = templateEnv.get_template(file)

        vars = {
        }

        outputText = template.render(vars)
        #print outputText

        f = open('site/' + file, mode='w')
        f.write(outputText.encode('ascii', 'replace'))
        f.close()

    print 'Done compiling HTML.'

compileCSS()
compileJS()
compileHTML()