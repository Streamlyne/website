#!/usr/bin/env python

from distutils.core import setup, Command

from minify.command import \
    minify_js, \
    minify_css

import jinja2

def render_html():
    print '\nCompiling HTML ...'

    templateLoader = jinja2.FileSystemLoader(searchpath="templates/")
    templateEnv = jinja2.Environment(loader=templateLoader)

    rawFiles = [
        ('index.html', 'home'),
        ('management.html', 'management'),
        ('operator.html', 'operator'),
        ('team.html', 'team'),
        ('contact.html', 'contact')
    ]

    for file in rawFiles:
        print '  Templating : ' + file[0]
        template = templateEnv.get_template(file[0])

        vars = {
            'page': file[1]
        }

        outputText = template.render(vars)
        #print outputText

        f = open('site/' + file[0], mode='w')
        f.write(outputText.encode('ascii', 'replace'))
        f.close()

    print 'Done compiling HTML.\n'

class CompileHTML(Command):
    '''
    Command class that extends the functionality of distutils
    allowing it to be used to build the Streamlyne website.
    '''

    description = 'Compiles HTML templates into site directory.'
    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self, *args, **kwargs):
        pass

    def run(self):
        '''
        Compiles the Streamlyne website using the jinja2 templating
        engine.
        '''
        render_html()

'''
Setup information
'''
setup(

    name='StreamlyneWebsite',
    version='0.4',
    description='Streamlyne public facing website, optimised as a python module.',
    author='Dawson Reid, and Todd Murphy',
    author_email='dawson@streamlyne.co',
    url='http://www.streamlyne.co',

    requires=[
        'jinja2',
        'minify',
    ],

    packages=[
        'site',
    ],
    package_data={
        'site': [
            'css/*.css',
            'font/*',
            'img/*',
            'js/*',
            '*',
        ]
    },

    cmdclass={
        'render_html': CompileHTML,
        'render_head_js': minify_js,
        'render_foot_js': minify_js,
        'render_css': minify_css,
    },
)