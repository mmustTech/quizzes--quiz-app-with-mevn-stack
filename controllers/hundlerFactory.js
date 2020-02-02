const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAll = Model => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.find().populate('questions');

        res.status(200).json({
            status: 'success',
            data: {
                data: doc
            }
        });
    });

 exports.createOne =  Model => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                data: doc
            }
        });
    });

exports.deleteOne = Model => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndRemove(req.params.TodoId);

        if(!doc) return next(new AppError('No document found with this ID', 404));

        res.status(200).json({
            status: 'success',
            message: 'Todo has been deleted with success!'
        });
    });

exports.updateOne = Model => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.TodoId, {
            title: req.body.title,
            done: req.body.done
        },
        {
            new: true, 
            runValidators: true
        }
        );

        if(!doc) return next(new AppError('No document found with this ID', 404));

        res.status(200).json({
            status: 'success',
            message: 'Todo has been updated with success!',
            data: {
                data: doc
            }
        });
    });

exports.getOne = Model => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.findById(req.params.TodoId).populate('questions');

        if(!doc) return next(new AppError('No document found with this ID', 404));

        res.status(201).json({
            status: 'success',
            data: {
                data: doc
            }
        });
    });